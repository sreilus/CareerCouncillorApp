import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'
import { UserContext } from '../contexts/UserContext';

const baseUrl = 'http://192.168.1.53:3500/api/';
export default class UniProgramChat extends Component {
    static contextType = UserContext
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            username: '',
            password: '',
            roomName: navigation.getParam('room', 'NO-ID'),
            user: {},
            otherUser: {},
            chatMessage: '',
            chatMessages: [],
        }
    }

    fun = (socket) => {
        let room = {
            roomName: this.state.roomName,
            userId: this.state.userId,
        }
        console.log("room: " + JSON.stringify(room))
        socket.emit('room', { room: room });
        socket.on(this.state.roomName, data => {
            console.log('i have joined', this.state.roomName)
            this.setState({
                roomName: data.room
            })

            let lastMessages = [];
            data.messagess.forEach(message => {
                let newMessage = {
                    _id: message.messageId,
                    text: message.message_body,
                    createdAt: message.created_at,
                    user: {
                        _id: message.senderId,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                }
                console.log(JSON.stringify(newMessage.text));
                lastMessages.push(newMessage);
            });
            this.setState({
                chatMessages: lastMessages
            });
        })

        socket.on('chat', data => console.log(`received chat from ${data.from} from the message room ${data.room}`));
    }

    componentDidMount() {
        const currentUser = this.context
        this.setState({
            user: currentUser[0]
        })
        this.socket = io("http://192.168.1.53:3800", { forceNode: true });
        this.fun(this.socket);
        this.socket.on("chat message", msg => {
            console.log('mesaj geldi');
            let newMessage = {
                _id: msg.messageId,
                text: msg.message,
                createdAt: new Date(),
                user: {
                    _id: msg.senderId,
                    name: 'React Native',
                    avatar: `https://placeimg.com/140/140/any`,
                },
            }
            console.log(JSON.stringify(msg))
            this.setState({
                chatMessages: [...this.state.chatMessages, newMessage]
            });
        });
    }

    submitChatMessage(chatMessage) {
        let currentUserType = '';
        if (this.state.user.userType === 2) {
            currentUserType = 'TeacherUser';
        }
        else {
            currentUserType = 'StudentUser';
        }
        console.log('userType: ' + this.state.user.userType)
        let data = {
            message: chatMessage.text,
            room: this.state.roomName,
            senderId: this.state.user._id,
            created_at: chatMessage.createdAt,
            onModelUser: currentUserType
        }
        console.log("gidenVeri : " + JSON.stringify(data))
        this.socket.emit('chat message', data);
        this.setState(({
            chatMessages: [...this.state.chatMessages, chatMessage],
        }))
    }

    sortByDate(arr) {
        arr.sort(function (a, b) {
            return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
        });
        return arr;
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        const chatMessages = this.state.chatMessages.map((chatMessage, i) => (
            <View style={styles.view}>
                <Text >{chatMessage} </Text>
            </View>
        ));
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 20, alignSelf: 'center' }}>{this.state.roomName}</Text>
                <GiftedChat
                    messages={this.state.chatMessages}
                    onSend={messages => this.submitChatMessage(messages[0])}
                    inverted={false}
                    placeholder="Bir mesaj yazınız..."
                    scrollToBottom={true}
                    showAvatarForEveryMessage={false}
                    renderUsernameOnMessage={true}
                    user={{
                        _id: this.state.user._id,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    view: {
        backgroundColor: '#0BAECE',
        borderRadius: 50,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
});