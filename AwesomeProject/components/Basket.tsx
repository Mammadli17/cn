import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from './context';
import { FlatList } from 'react-native-gesture-handler';

const Basket = () => {
  let { favorites, setFavorites } = useContext  <any>(FavoritesContext);
  const renderItem = ({item}: any)=>{

    return (
      <Text style = {{color:"black", fontSize:30}}>
        {item.title}
      </Text>
    ) 
  }
  return (
    <View>
      <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id}      
      />
    </View>
  )
}

export default Basket