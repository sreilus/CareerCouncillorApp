import React, { Component, useContext, useState, useEffect } from 'react';
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
import { UserContext } from '../contexts/UserContext';
import io from "socket.io-client";

const ChatList = (props) => {

    const [user, setUser] = useContext(UserContext);
    const [isLoading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);
    const socket = io("http://192.168.1.53:3600", { forceNode: true });

    socket.on('getChatUsers', data => {
        console.log("veri: " + JSON.stringify(data));
        setChats(data);
    });
    useEffect(() => {
        socket.emit('getChatUsers', user);
        console.log("girdi+++");
    })

    const userOnPress = (user, otherUser) => {
        let roomName = otherUser.email + '@!@!2!@!@' + user[0].email
        console.log('r: ' + roomName)
        console.log("other: " + JSON.stringify(otherUser))
        props.navigation.navigate('Chat', { room: roomName, userId: user[0]._id, otherUserId: otherUser.id })
    }

    // const renderItem = ({ item }) => {
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
    //                         <TouchableOpacity onPress={() => props.navigation.navigate('OtherProfile', { userId: item.id })}>
    //                             {console.log("t: " + item.id)}
    //                             <Image source={{ uri: item.image }} style={styles.pic} />
    //                         </TouchableOpacity>
    //                         <TouchableOpacity onPress={() => userOnPress(user, item.user2)}>
    //                             <View>
    //                                 <View style={styles.nameContainer}>
    //                                     <Text style={styles.nameTxt}>{item.user2.name}</Text>
    //                                 </View>
    //                                 <View style={styles.end}>
    //                                     {/* <Image style={[styles.icon, { marginLeft: 15, marginRight: 5, width: 14, height: 14 }]} source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png" }} /> */}
    //                                     {/* <Text style={styles.time}>{item.date} {item.time}</Text> */}
    //                                 </View>
    //                             </View>
    //                         </TouchableOpacity>

    //                         <Image style={[styles.icon, { marginRight: 50 }]} />
    //                     </View>
    //                 )}
    //         </UserContext.Consumer>
    //     );
    // }

    if (isLoading === false) {
        return (
            <View style={{ flex: 1 }} >
                <FlatList
                    data={chats}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) =>
                    
                        <UserContext.Consumer>
                            {
                                 
                                (user) => (
                                    
                                    <View style={styles.row}>
                                    { console.log("ttt: " + JSON.stringify(item))}
                                        <TouchableOpacity onPress={() => props.navigation.navigate('OtherProfile', { userId: item.id })}>
                                            {console.log("t: " + item.id)}
                                            <Image source={{ uri: item.image }} style={styles.pic} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => userOnPress(user, item.user2)}>
                                            <View>
                                                <View style={styles.nameContainer}>
                                                    <Text style={styles.nameTxt}>{item.user2.name}</Text>
                                                </View>
                                                <View style={styles.end}>
                                                    {/* <Image style={[styles.icon, { marginLeft: 15, marginRight: 5, width: 14, height: 14 }]} source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png" }} /> */}
                                                    {/* <Text style={styles.time}>{item.date} {item.time}</Text> */}
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
        <View style={{ marginTop: 200, marginLeft: 120 }}>
            <Text>Kullanıcılar Yükleniyor... </Text>
        </View>)
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

export default ChatList;