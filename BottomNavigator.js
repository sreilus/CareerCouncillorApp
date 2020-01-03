import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {
    StatusBar
} from "react-native";

import AddMovie from './screens/AddMovie'

import ProfilePage from './screens/ProfilePage'
import GetAllUser from './screens/GetAllUser'
import ProfileArgon from './screens/ProfileArgon'
import Chat from './screens/Chat'
import UserList from './screens/UserList'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNavigator extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'music', title: 'Anasayfa', icon: 'home' },
            { key: 'users', title: 'Kullanıcılar', icon: 'face-profile' },
            { key: 'albums', title: 'Mesajlar', icon: 'chat' },
            { key: 'recents', title: 'Profil', icon: 'face-profile' },

        ],
    };

    static navigationOptions = {
        title: 'Kayıt Ol',
        header: null
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        music: AddMovie,
        users: UserList,
        albums: ProfilePage,
        recents: ProfileArgon,
        chat:Chat
    });

    renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'music':
                return <AddMovie jumpTo={jumpTo} />;
            case 'users':
                return <UserList navigation={this.props.navigation} jumpTo={jumpTo} />;
            case 'albums':
                return <ProfilePage jumpTo={jumpTo} />;
            case 'recents':
                return <ProfileArgon jumpTo={jumpTo} />;
        }
      }

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this.renderScene}
                style={{ color: 'gray' }}
                barStyle={{ backgroundColor: '#07658F' }}
            />

        );
    }
}