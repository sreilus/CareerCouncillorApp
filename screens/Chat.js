import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header'

//const roomName = 'ab@gmail.com' + '@!@!2!@!@' + 'b@gmail.com';

const baseUrl = 'http://192.168.1.53:3500/api/';
export default class Chat extends React.PureComponent {
  static contextType = UserContext
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      username: "",
      password: "",
      userId: navigation.getParam('userId', 'NO-ID'),
      user: {},
      otherUserId: navigation.getParam('otherUserId', 'NO-ID'),
      otherUser: {},
      chatMessage: "",
      chatMessages: [],
      roomName: navigation.getParam('room', 'NO-ID'),
    }
  }


  checkUserId = (senderId) => {
    console.log("sender: " + JSON.stringify(senderId) + " userId: " + this.state.userId)
    if (this.state.userId == senderId) {
      return 1;
    }
    else
      return 2;
  }

  fun = (socket) => {
    let room = {
      roomName: this.state.roomName,
      userId: this.state.userId,
      otherUserId: this.state.otherUserId
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
        this.setState({
          chatMessages: [...this.state.chatMessages, newMessage]
        });
      });

    })

    socket.on('chat', data => console.log(`received chat from ${data.from} from the message room ${data.room}`));
  }

  componentDidMount() {
    const currentUser = this.context
    this.setState({
      user: currentUser[0]
    })
    this.getOtherUserData(this.state.otherUserId);
    this.socket = io("http://192.168.1.53:3600", { forceNode: true });
    this.socket.on("chat message", msg => {
      let newMessage = {
        _id: msg.messageId,
        text: msg.message,
        createdAt: new Date(),
        user: {
          _id: msg.senderId,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }
      console.log(JSON.stringify(msg))

      this.setState({
        chatMessages: [...this.state.chatMessages, newMessage]
      });

    });
    this.fun(this.socket);
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
      senderId: this.state.userId,
      created_at: chatMessage.createdAt,
      onModelUser: currentUserType
    }
    console.log("ddd: " + JSON.stringify(data))
    this.socket.emit('chat message', data);
    this.setState(({
      chatMessages: [...this.state.chatMessages, chatMessage],
    }))
  }

  getOtherUserData = async (userId) => {
    await fetch(baseUrl + 'user/' + userId, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        let deger = responseJson;
        this.setState({
          otherUser: deger
        })
      }).finally(() => {

      })
      .catch((error) => {
        console.error(error);
      });
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
    // const chatMessages = this.state.chatMessages.map((chatMessage, i) => (
    //   <View style={styles.view}>
    //     <Text >{chatMessage} </Text>
    //   </View>
    // ));
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 20, alignSelf: 'center' }}>{this.state.otherUser.name}</Text>
        <GiftedChat
          messages={this.state.chatMessages}
          onSend={messages => this.submitChatMessage(messages[0])}
          inverted={false}
          placeholder="Bir mesaj yazınız..."
          scrollToBottom={true}
          showAvatarForEveryMessage={false}
          renderUsernameOnMessage={true}
          user={{
            _id: this.state.userId,
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