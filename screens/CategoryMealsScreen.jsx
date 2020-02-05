import React from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => 
{
    const catId = props.navigation.getParam("categoryId");

    //To find Category details in which user clicked on
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

    //To find out all the meals that belong to the category in which the user clicked on
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0 )

    

    return (
        <MealList listData = {displayedMeals} navigation = {props.navigation} />
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



export default CategoryMealsScreen;