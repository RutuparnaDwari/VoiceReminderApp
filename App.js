import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}

      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
