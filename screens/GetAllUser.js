import React, { Component } from 'react'
import { Text, View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { UserContext } from '../contexts/UserContext';

export default class GetAllUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      users: [],
      baseUrl: 'https://nodejs-mongo-api-mobile.herokuapp.com/api/'
    };
  }

  componentDidMount() {
    this.listUsers();
  }

  userList = () => {
    return this.state.users.map((data) => {
      return (
        <View><Text>{data.name}</Text></View>
      )
    })
  }

  listUsers = async () => {
    let url = this.state.baseUrl + "user/getUsers/get";
    console.log('url: ' + url)
    this.setState({
      isLoading: true
    })
    await fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let deger = responseJson;
        this.setState({
          users: deger
        })

      }).finally(() => {

      })
      .catch((error) => {
        console.error(error);
      });
    this.setState({
      isLoading: false
    })
  }
  render() {
    if (this.state.isLoading === false) {
      return (
        <View style={styles.container}>
          <UserContext.Consumer>
            {
              (user) => (
                <FlatList
                  data={this.state.users}
                  renderItem={({ item }) =>

                    <TouchableWithoutFeedback
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      onPress={() => this.props.navigation.navigate('Chat', { room: item.email, userId: user[0]._id })}
                    >
                      <View style={styles.view}
                      >
                        <Text >İsim: {item.name}</Text>
                        <Text >Kullanıcı Adı: {item.username}</Text>

                      </View>
                    </TouchableWithoutFeedback>
                  }
                />
              )}
          </UserContext.Consumer>
        </View>
      );
    }
    return (
      <View>
        <Text style={{ marginTop: 25 }}>Yükleniyor Lütfen Bekleyiniz...</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  view: {
    backgroundColor: '#cfcfcf',
    borderRadius: 50,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
  },
});