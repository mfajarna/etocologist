import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IntroScreen, Signin, Signup, SplashScreen } from '../pages';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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
        </Stack.Navigator>
    )
}

export default Router;