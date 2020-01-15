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
    TouchableWithoutFeedback
} from 'react-native';
import { UserContext } from '../contexts/UserContext';
import {programs} from '../constants/datas'

export default class UniversityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            programs: programs,
            baseUrl: 'https://nodejs-mongo-api-mobile.herokuapp.com/api/universities',
            page: 0,
            posts: []
        };
    }

    componentDidMount() {
        // this.listUniversities();
        console.log(this.state.programs);
        this.convertItemForList(this.state.programs);
        this.setState({
            page: 0
        }, function () {
            this.addRecords(0);
        })
    }

    listUniversities = async () => {
        let url = this.state.baseUrl;
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

    onScrollHandler = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.addRecords(this.state.page);
        });
    }

    addRecords = (page) => {
        // assuming this.state.dataPosts hold all the records
        const newRecords = []
        for (var i = page * 12, il = i + 12; i < il && i <
            this.state.programs.length; i++) {
            newRecords.push(this.state.programs[i]);
        }
        this.setState({
            posts: [...this.state.posts, ...newRecords]
        });
    }

    convertItemForList = (universityList) => {
        let universityArray = [];
        universityList.map((university) => {
            let newUser = {
                id: university._id,
                name: university.name,
            }
            universityArray.push(newUser);
        })
        this.setState({
            programs: universityArray
        });
    }

    userOnPress = (user, university) => {
        let roomName = university.name
        console.log('uniName: ' + roomName)
        this.props.navigation.navigate('UniChat', { room: roomName, userId: user[0]._id })
    }

    renderItem = ({ item }) => {
        console.log("ttt: " + JSON.stringify(item));
        // var callIcon = "https://img.icons8.com/color/48/000000/phone.png";
        // if (item.video == true) {
        //     callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
        // }
        return (
            <UserContext.Consumer>
                {
                    (user) => (
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('OtherProfile', { userId: item.id })}>
                                {console.log("uni: " + item.id)}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.userOnPress(user, item)}>
                                <View>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.nameTxt}>{item.name}</Text>
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
        );
    }

    render() {
        if (this.state.isLoading === false) {
            return (
                <View style={{ flex: 1 }} >
                    <FlatList
                        data={this.state.posts}
                        onEndReached={this.onScrollHandler}
                        onEndThreshold={0}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        renderItem={this.renderItem} />
                </View>
            );
        }
        return (
            <View style={{ alignSelf: 'center' }}>
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