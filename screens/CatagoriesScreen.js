import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CatagoryGridTile from '../components/CatagoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


const CatagoriesScreen = ({navigation}) => {
  function renderCategoryItem(itemData) {
   
    function pressHandler() {
      navigation.navigate("MealsOverview",{
        categoryId:itemData.item.id

      });
    }
    return <CatagoryGridTile title={itemData.item.title}  color={itemData.item.color}  onPress={pressHandler}/>; 
  }
  
  return (
    <FlatList data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
  )
}

export default CatagoriesScreen

const styles = StyleSheet.create({})