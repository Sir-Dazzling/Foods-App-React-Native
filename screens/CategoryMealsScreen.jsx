import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => 
{
    const catId = props.navigation.getParam("categoryId");

    //To find Category details in which user clicked on
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

    //To find out all the meals that belong to the category in which the user clicked on
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0 )

    //To render or display Meal Items
    const renderMealItem = (itemData) => 
    {
        return (
            <MealItem title = {itemData.item.title} duration = {itemData.item.duration} complexity = {itemData.item.complexity} affordability = {itemData.item.affordability} image = {itemData.item.imageUrl} onSelectMeal = {() => 
                {
                    //Adding a param of MealId
                    props.navigation.navigate({routeName: "MealDetails", params: {mealId: itemData.item.id}});
                }} />
        );
    };

    return (
        <View style = {styles.screen}>
           <FlatList data = {displayedMeals} renderItem = {renderMealItem} style = {{width: "100%"}} />
        </View>
    );
};

//Configuring and Styling Header
CategoryMealsScreen.navigationOptions = (navigationData) =>
{
  const catId = navigationData.navigation.getParam("categoryId");

  //To find Category details in which user clicked on
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

  return {
    headerTitle: selectedCategory.title
  };
}; 

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
});

export default CategoryMealsScreen;