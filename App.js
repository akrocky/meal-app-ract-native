import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CatagoriesScreen from './screens/CatagoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{
            backgroundColor:'#351401'
          },
          headerTintColor:'white',
          contentStyle:{
            backgroundColor:'#3f2f25'
          }}} initialRouteName="MealsCategory">
        <Stack.Screen name="MealsCategory" component={CatagoriesScreen}  
        options={{
          title: 'All Categories',
          
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
        // options={
        // ({route,navigation})=>{
        //   const catId=route.params.categoryId;
        //   return {
        //     title:catId,
        //   };
        // }  
        // }
        />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}
           />
      </Stack.Navigator>
    
  
  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container:    {}
  
});
