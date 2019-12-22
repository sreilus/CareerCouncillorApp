import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import Register from './screens/Register';
import RegisterStudent from './screens/RegisterStudent';
import RegisterTeacher from './screens/RegisterTeacher';

const AppNavigator = createStackNavigator(
    {
      Register: Register,
      RegisterStudent: RegisterStudent,
      RegisterTeacher,RegisterTeacher,
    },
    {
      initialRouteName: 'Register',
    }
);

export default createAppContainer(AppNavigator);