import React from 'react';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => 
{
    const catId = props.navigation.getParam("categoryId");
    
    //Getting Meals from reducers with Hooks
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >=0 )

    

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