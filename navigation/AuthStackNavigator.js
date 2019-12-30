import { createStackNavigator } from 'react-navigation-stack';
import UserBookings from '../screens/UserBookings';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen' ;

import BrowseServices from '../screens/BrowseServices';
import Filter from '../screens/Filter';
import ChangePassword from '../screens/ChangePassword';
//mywork
import  ServiceListScreen  from '../screens/ServiceListScreen'; 
import  ServiceCardComponent  from '../screens/components/ServiceCardComponent'; 



export default AuthStack = createStackNavigator(
    {
    UserBooking: { screen: UserBookings },
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    ForgotPassword: {screen: ForgotPasswordScreen},
	
	BrowseServices: { screen: BrowseServices },
    ChangePassword: { screen: ChangePassword },
    //mywork
    ServiceList: {screen:ServiceListScreen},
    Filter: { screen: Filter },
    ServiceCardComponent:{ screen: ServiceCardComponent},


    },
    {
        initialRouteName: 'ServiceList',
    }
)