import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header'

//const roomName = 'ab@gmail.com' + '@!@!2!@!@' + 'b@gmail.com';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      username: "",
      password: "",
      userId: navigation.getParam('userId', 'NO-ID'),
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
    socket.emit('room', { room: this.state.roomName });
    socket.on(this.state.roomName, data => {
      console.log('i have joined', data.room)
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
        console.log(JSON.stringify(newMessage));
        this.setState({
          chatMessages: [...this.state.chatMessages, newMessage]
        });
      });

    })

    socket.on('chat', data => console.log(`received chat from ${data.from} from the message room ${data.room}`));
  }

  componentDidMount() {
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

  _login = () => {
    if (this.state.username === "username" && this.state.password === "1234") {
      Alert.alert("Giriş Yapıldı");
    }
    else {
      Alert.alert("Tekrar Giriniz");
    }
  }

  submitChatMessage(chatMessage) {

    let data = {
      message: chatMessage.text,
      room: this.state.roomName,
      senderId: this.state.userId,
      created_at: chatMessage.createdAt
    }
    console.log("ddd: " + JSON.stringify(data))
    this.socket.emit('chat message', data);
    this.setState(previousState => ({
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
      // <View style={styles.container}>
      //     <TextInput
      //         style={{ height: 40, borderWidth: 2, top: 60 }}
      //         autoCorrect={false}
      //         value={this.state.chatMessage}
      //         returnKeyType="send"
      //         onSubmitEditing={() => this.submitChatMessage()}
      //         onChangeText={chatMessage => {
      //             this.setState({ chatMessage });
      //         }} />
      //     <KeyboardAwareScrollView style={{ marginVertical: 60 }}  >
      //         {chatMessages}
      //     </KeyboardAwareScrollView>
      // </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 20, justifyContent: 'flex-end' }}>Username</Text>
        <GiftedChat
          messages={this.state.chatMessages}
          onSend={messages => this.submitChatMessage(messages[0])}
          inverted={false}
          placeholder="Bir mesaj yazınız..."
          scrollToBottom={true}
          showAvatarForEveryMessage={false}
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