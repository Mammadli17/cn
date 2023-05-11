import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tab from './components/tab';
import Detail from './components/Detail';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
    <NavigationContainer>

   <Stack.Navigator>
      <Stack.Screen name="tab" component={tab}  options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App
