import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Basket from './Basket';
const Tab = createBottomTabNavigator();

const tab = () => {
  return (
    
    <>
    <Tab.Navigator>
        <Tab.Screen name='home' component={Home} options={{headerShown:false}}/>
        <Tab.Screen name='basket' component={Basket} options={{headerShown:false}} />

    </Tab.Navigator>
    </>
    
  )
}

export default tab