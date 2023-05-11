import { View, Text ,Image,Button} from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from './context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Basket = () => {
  let totalPrice = () => {
    let total = 0
    if (favorites.length > 0) {

      favorites.forEach((item: any) => {
        total += item.price * item.count
      });
    }
    return total
  }
  const Dec = (id: any) => {
    let item: any = favorites.find((pr: any) => pr.id === id)

    item.count++;


    
    setFavorites([...favorites])

  }
  const Inc = (id: any) => {
    let item: any = favorites.find((pr: any) => pr.id === id)

    if (item.count > 1) {
      item.count--;
      setFavorites([...favorites])


    } else {
      alert('You can not decrease the product quantity to 1')

    }

  }
  const deleted =()=>{
    setFavorites([])
  }
  let { favorites, setFavorites } = useContext  <any>(FavoritesContext);
  const renderItem = ({item}: any)=>{

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
         <Image
        source={{uri : item.image}}
        style={{height:200,width:200,marginTop:50,marginHorizontal:50}}
        
        />
      <View>
        <Text style={{color:"black", fontSize:18}}>{item.title}</Text>
        <Text style={{color:"black", fontSize:14}}>${item.price*item.count}</Text>
        <View style={{marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:"red",padding:10}} onPress={() => Dec(item.id)}>
            <Text>++</Text>
        </TouchableOpacity>
        <Text style={{color:"red"}}>{item.count}</Text>
        <TouchableOpacity style={{backgroundColor:"red",padding:10}} onPress={() => Inc(item.id)}>
            <Text>--</Text>
        </TouchableOpacity>
        </View>
  
      </View>
    
    </View>
    ) 
  }
  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{fontSize:30,color:"black"}}>Shopping Card</Text>
      <Button onPress={deleted} title='DELETE'/>
      </View>
      <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id}      
      />
       {
        favorites && <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: "black" }}>Total: </Text>
            <Text style={{ fontSize: 20, color: "red" }}>${totalPrice()}</Text>
          </View>
        </View>
      }
    </View>
  )
}

export default Basket