import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {
    StatusBar
} from "react-native";

import AddMovie from './screens/AddMovie';

import ProfilePage from './screens/ProfilePage';
import ProfileArgon from './screens/ProfileArgon';
import Chat from './screens/Chat';
import UserList from './screens/UserList';
import ChatList from './screens/ChatList';
import Universities from './screens/Universities'
import UniversityPrograms from './screens/UniversityPrograms'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNavigator extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'music', title: 'Üniversiteler', icon: 'school' },
            { key: 'programs', title: 'Bölümler', icon: 'seat-legroom-reduced' },
            { key: 'users', title: 'Danışmanlar', icon: 'face-profile' },
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
        music: Universities,
        programs: UniversityPrograms,
        users: UserList,
        albums: ChatList,
        recents: ProfileArgon,
        chat: Chat
    });

    componentDidMount() {

    }

    renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'music':
                return <Universities navigation={this.props.navigation} jumpTo={jumpTo} />;
            case 'programs':
                return <UniversityPrograms navigation={this.props.navigation} jumpTo={jumpTo} />;
            case 'users':
                return <UserList navigation={this.props.navigation} jumpTo={jumpTo} />;
            case 'albums':
                return <ChatList navigation={this.props.navigation} jumpTo={jumpTo} />;
            case 'recents':
                return <ProfileArgon navigation={this.props.navigation} jumpTo={jumpTo} />;
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