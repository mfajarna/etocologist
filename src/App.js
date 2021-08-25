import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store'
import FlashMessage from 'react-native-flash-message';

const MainApp = () => {

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return(
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}


const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;

