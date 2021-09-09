import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard, DetailProfileAnak, IntroScreen, Messages, PoliAnak, Profile, Signin, SignProfile, Signup, SplashScreen, SuccessLogin } from '../pages';
import { BottomNavigator } from '../components';
import FindUs from '../pages/FindUs';
import PoliIbu from '../pages/PoliIbu';
import GrafikIbu from '../pages/GrafikIbu';
import GrafikAnak from '../pages/GrafikAnak';
import Konfirmasi from '../pages/Konfirmasi';
import Chatting from '../pages/Chatting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
         <Tab.Screen name="Dashboard" component={Dashboard}/>
         <Tab.Screen name="Messages" component={Messages} />
         <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="IntroScreen"
                component={IntroScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={Signin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={Signup}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignProfile"
                component={SignProfile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SuccessLogin"
                component={SuccessLogin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Messages"
                component={Messages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
           <Stack.Screen
                name="FindUs"
                component={FindUs}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PoliIbu"
                component={PoliIbu}
                options={{headerShown: false}}
                
            />
            <Stack.Screen
                name="PoliAnak"
                component={PoliAnak}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GrafikIbu"
                component={GrafikIbu}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name="DetailProfileAnak"
                component={DetailProfileAnak}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GrafikAnak"
                component={GrafikAnak}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Konfirmasi"
                component={Konfirmasi}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router;