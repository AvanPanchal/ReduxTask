import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from '../src/screens/Homescreen';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import Userlist from '../src/screens/Userlist';
import UserDetails from '../src/screens/UserDetails';
const AutoStack = createStackNavigator({
    //HomeScreen: { screen: HomeScreen },
    Register: { screen: Register },
    Login: { screen: Login },
    Userlist: { screen: Userlist },
    UserDetails: { screen: UserDetails }
}, {
    headerMode: 'none'
})

const AuthStack = createStackNavigator({
    AutoStack,
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;