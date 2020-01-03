import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import Register from './screens/Register';
import RegisterStudent from './screens/RegisterStudent';
import RegisterTeacher from './screens/RegisterTeacher';
import Login from './screens/Login';
import GetAllUser from './screens/GetAllUser'
import BottomNavigator from './BottomNavigator';
import Chat from './screens/Chat'
import ChatTest from './screens/ChatTest'
import UserList from './screens/UserList';


const AppNavigator = createStackNavigator(
    {
      Register: Register,
      RegisterStudent: RegisterStudent,
      RegisterTeacher: RegisterTeacher,
      Login: Login,
      BottomNavigator:BottomNavigator,
      GetAllUser:GetAllUser,
      Chat:Chat,
      ChatTest:ChatTest,
      UserList:UserList
    },
    {
      initialRouteName: 'Login',
      headerMode:'none'
    }
);

export default createAppContainer(AppNavigator);