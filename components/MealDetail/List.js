import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const List = ({data}) => {
  return (
    data.map((datapont)=>{
        return(
            <View key={datapont} style={styles.listItem}>
         <Text style={styles.listText}>{datapont}</Text>  
         </View> 
        )
      })
  )
}

export default List

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'

    },
    listText:{
        color:'#351401',
        textAlign:'center'
    }
})