import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import Register from './screens/Register';
import RegisterStudent from './screens/RegisterStudent';
import RegisterTeacher from './screens/RegisterTeacher';
import Login from './screens/Login';
import BottomNavigator from './BottomNavigator';
import Chat from './screens/Chat'
import UniChat from './screens/UniChat'
import UniProgramChat from './screens/UniProgramChat'
import ChatTest from './screens/ChatTest'
import UserList from './screens/UserList';
import OtherProfile from './screens/OtherProfile'
import Universities from './screens/Universities'

const AppNavigator = createStackNavigator(
    {
      Register: Register,
      RegisterStudent: RegisterStudent,
      RegisterTeacher: RegisterTeacher,
      Login: Login,
      BottomNavigator:BottomNavigator,
      Chat:Chat,
      UniChat:UniChat,
      UniProgramChat:UniProgramChat,
      ChatTest:ChatTest,
      UserList:UserList,
      OtherProfile:OtherProfile
    },
    {
      initialRouteName: 'Login',
      headerMode:'none'
    }
);

export default createAppContainer(AppNavigator);