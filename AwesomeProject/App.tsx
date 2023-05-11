import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tab from './components/tab';
import Detail from './components/Detail';
import { FavoritesProvider } from './components/context';


const Stack = createStackNavigator();
const App = () => {
  return (
    <>
    <NavigationContainer>

    <FavoritesProvider>
    <Stack.Navigator>
      <Stack.Screen name="tab" component={tab}  options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>
      </FavoritesProvider>
    </NavigationContainer>
    </>
  )
}

export default App
