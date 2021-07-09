import React from "react";
import Login from './components/login/Login.js';
import Home from './components/home/Home.js';
import CreateAccount from './components/create-account/CreateAccount.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}