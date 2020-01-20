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
            page: 0,
            posts: [],
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
                this.setState({
                    page: 0
                }, function () {
                    this.addRecords(0);
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

    addRecords = (page) => {
        // assuming this.state.dataPosts hold all the records
        const newRecords = []
        for (var i = page * 12, il = i + 12; i < il && i <
            this.state.users.length; i++) {
            newRecords.push(this.state.users[i]);
        }
        this.setState({
            posts: [...this.state.posts, ...newRecords]
        });
    }

    onScrollHandler = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.addRecords(this.state.page);
        });
    }
//  https://www.bootdey.com/img/Content/avatar/avatar7.png
    convertItemForList = (userList) => {
        let userArray = [];
        userList.map((user) => {
            let newUser = {
                id: user._id,
                name: user.name,
                date: "12 jan",
                time: '11:14 am',//https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png
                video: false,//https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
                email: user.email
            }
            userArray.push(newUser);
        })
        this.setState({
            users: userArray
        });
    }

    userOnPress = (user, otherUser) => {
        let roomName = otherUser.email + '@!@!2!@!@' + user[0].email
        console.log('r: ' + roomName)
        console.log("other: " + JSON.stringify(otherUser))
        this.props.navigation.navigate('Chat', { room: roomName, userId: user[0]._id, otherUserId: otherUser.id })
    }

    // renderItem = ({ item }) => {
    //     console.log("ttt: " + JSON.stringify(item));
    //     // var callIcon = "https://img.icons8.com/color/48/000000/phone.png";
    //     // if (item.video == true) {
    //     //     callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
    //     // }
    //     return (
    //         <UserContext.Consumer>
    //             {
    //                 (user) => (
    //                     <View style={styles.row}>
    //                         <TouchableOpacity onPress={() => this.props.navigation.navigate('OtherProfile', { userId: item.id })}>
    //                             {console.log("t: " + item.id)}
    //                             <Image source={{ uri: item.image }} style={styles.pic} />
    //                         </TouchableOpacity>
    //                         <TouchableOpacity onPress={() => this.userOnPress(user, item)}>
    //                             <View>
    //                                 <View style={styles.nameContainer}>
    //                                     <Text style={styles.nameTxt}>{item.name}</Text>
    //                                 </View>
    //                                 <View style={styles.end}>
    //                                 </View>
    //                             </View>
    //                         </TouchableOpacity>
    //                         <Image style={[styles.icon, { marginRight: 50 }]} />
    //                     </View>
    //                 )}
    //         </UserContext.Consumer>
    //     );
    // }

    render() {
        if (this.state.isLoading === false) {
            return (
                <View style={{ flex: 1 }} >
                    <FlatList
                        data={this.state.users}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) =>
                            <UserContext.Consumer>
                                {
                                    (user) => (
                                        <View style={styles.row}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('OtherProfile', { userId: item.id })}>
                                               
                                                <Image source={{ uri: item.image }} style={styles.pic} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.userOnPress(user, item)}>
                                                <View>
                                                    <View style={styles.nameContainer}>
                                                        <Text style={styles.nameTxt}>{item.name}</Text>
                                                    </View>
                                                    <View style={styles.end}>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <Image style={[styles.icon, { marginRight: 50 }]} />
                                        </View>
                                    )}
                            </UserContext.Consumer>
                        } />
                </View>
            );
        }
        return (
            <View style={{alignSelf:'center'}}>
                <Text>Yükleniyor...</Text>
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