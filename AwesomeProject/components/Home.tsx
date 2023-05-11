import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

const Home = ( { navigation } : any) => {
    const [data, setdata] = useState<any>([])
    useEffect(() => {

      axios.get('https://fakestoreapi.com/products/')
      .then(response => {
          setdata(response.data)
      })
      .catch(error => {
          console.log(error);
          
      })

  }, [])
            const renderItem = ({ item }: any) => {
                return (
             
                
                <View >
                <TouchableOpacity onPress={()=> navigation.navigate("Detail",{id:item.id})}>
                <View style={{backgroundColor:"red",marginHorizontal:20,marginTop:100,width:250,height:400}}>
                  <Text style={{ fontSize: 20 ,color:"white" }}>{item.title}</Text>
                  <Image
                  source={{uri: item.image}}
                  style={{width: 200, height: 150,marginHorizontal:20}}
                  
                  
                  />
                  <View style={{marginVertical:50,marginHorizontal:50}}>
                  <Text style={{fontSize:30}}>${item.price}</Text>
                  </View>
                  </View>
                </TouchableOpacity>
             </View>
                
            
                )
                
              }
  return (
    <View>
       <View style={{alignItems:"center",marginTop:40}}>
       <Text style={{fontSize:40,color:"black"}}>My Products</Text>
       </View>
        <View>
        <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
    />
        </View>
    </View>
  )
}

export default Home