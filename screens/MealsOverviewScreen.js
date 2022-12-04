import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({route,navigation}) => {
const catId=route.params.categoryId;
const displayMeals=MEALS.filter((mealItem)=>{
  return mealItem.categoryIds.indexOf(catId)>= 0;
})
useLayoutEffect(() => {
  const categoryTitle = CATEGORIES.find((ct) => ct.id==catId).title;
  navigation.setOptions({
    title:categoryTitle
    });
}, [catId,navigation])




function renderMealItem(itemData) {
  const {id,title,imageUrl,affordability,complexity,duration}=itemData.item;
  const mealItemProps={id,title,imageUrl,affordability,complexity,duration}
  return <MealItem  {...mealItemProps}/>
}

  return (
    <View>
      <FlatList data={displayMeals}
      keyExtractor={(item)=>item.id} 
      renderItem ={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})