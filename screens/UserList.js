import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UserContext } from '../contexts/UserContext';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calls: [
                { id: 1, name: "Mark Doe", date: "12 jan", time: '11:14 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
                { id: 2, name: "Clark Man", date: "12 jul", time: '15:58 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
                { id: 3, name: "Jaden Boor", date: "12 aug", time: '12:45 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
            ],
            isLoading: true,
            users: [],
            baseUrl: 'https://nodejs-mongo-api-mobile.herokuapp.com/api/'
        };
    }

    componentDidMount() {
        this.listUsers();
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
                this.convertItemForList(deger);

            }).finally(() => {

            })
            .catch((error) => {
                console.error(error);
            });
        this.setState({
            isLoading: false
        })
    }

    convertItemForList = (userList) => {
        userList.map((user) => {
            let newUser = {
                id: user._id,
                name: user.name,
                date: "12 jan",
                time: '11:14 am',
                video: false,
                image: "https://bootdey.com/img/Content/avatar/avatar7.png",
                email:user.email
            }
            this.setState({
                users :[...this.state.users,newUser]
            });
        })
        
    }

    renderItem = ({ item }) => {
        console.log("ttt: "+JSON.stringify(item));
        var callIcon = "https://img.icons8.com/color/48/000000/phone.png";
        if (item.video == true) {
            callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
        }
        return (
            <UserContext.Consumer>
                {
              (user) => (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat', { room: item.email, userId: user[0]._id })}>
                <View style={styles.row}>
                    <Image source={{ uri: item.image }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt}>{item.name}</Text>
                        </View>
                        <View style={styles.end}>
                            {/* <Image style={[styles.icon, { marginLeft: 15, marginRight: 5, width: 14, height: 14 }]} source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png" }} /> */}
                            {/* <Text style={styles.time}>{item.date} {item.time}</Text> */}
                        </View>
                    </View>
                    <Image style={[styles.icon, { marginRight: 50 }]}  />
                </View>
            </TouchableOpacity>
              )}
            </UserContext.Consumer>
        );
    }

    render() {
        if (this.state.isLoading === false) {
        return (
            <View style={{ flex: 1 }} >
                <FlatList
                    extraData={this.state}
                    data={this.state.users}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={this.renderItem} />
            </View>
        );
    }
    return (
              <View>
                  <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
              </View>)
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
        justifyContent: 'space-between',

    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    pic: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,

    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12,

    },
    icon: {
        height: 28,
        width: 28,
    }
}); 