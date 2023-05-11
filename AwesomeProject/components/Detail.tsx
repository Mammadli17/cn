import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { FavoritesContext } from './context'

const Detail = ({route} : any) => {
    const {id} = route.params
    const [data, setdata] = useState<any>([])
    const { favorites, setFavorites } = useContext(FavoritesContext);
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products/'+id)
        .then(response => {
            setdata(response.data)

        })
        .catch(error => {
            console.log(error);
            
        })
        
  
    }, [])
    const Basket = ()=>{
        const Data : any = {
            id: id,
            title:data.title,
            count:1,
            price:data.price,
            image:data.image
        }

    setFavorites([...favorites,Data])
   
    console.log(favorites);
    
    }
  return (
    <View >
      <View style={{backgroundColor:"red"}}>
      <Image
        source={{uri : data.image}}
        style={{height:200,width:200,marginTop:50,marginHorizontal:50}}
        
        />
      <Text style={{color:"black",fontSize:20, marginHorizontal:50}}>{data.title}</Text>
      <Text style={{color:"black",fontSize:20, marginHorizontal:50}}>${data.price}</Text>

      </View>
      <TouchableOpacity onPress={Basket} style={{marginVertical:80,marginHorizontal:50,backgroundColor:"red",height:80,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:"black",fontSize:20}}> ADD TO BASKET </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Detail