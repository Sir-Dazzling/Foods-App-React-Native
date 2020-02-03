import React from 'react';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions =  
{
    headerStyle: 
    {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerTitle: "Meals App"
};


//Creating a Stack Navigator Element
const MealsNavigator =  createStackNavigator({
    Categories: 
    {
        screen: CategoriesScreen,
    },
    CategoryMeals: 
    {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailsScreen 
},
    {
        //initialRouteName: "Categories",
        defaultNavigationOptions:  defaultStackNavOptions
    }
);

const FavNavigator =  createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen 
}, 
{
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = 
{
    Meals: 
    {
        screen: MealsNavigator,
        navigationOptions: 
        {
            tabBarIcon: (tabInfo) => 
            {
                return (
                    <Ionicons name = "ios-restaurant" size = {25} color = {tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: 
    {
        screen: FavNavigator,
        navigationOptions:
        {
            tabBarIcon: (tabInfo) => 
            {
                return <Ionicons name = "ios-star" size = {25} color = {tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
};

//Creating a Tab Navigator Element
const MealsFavTabNavigator = Platform.OS === "android" ?
createMaterialBottomTabNavigator(tabScreenConfig,
{
    activeTintColor: Colors.accentColor,
    shifting: true,
    barStyle: 
    {
        backgroundColor: Colors.primaryColor 
    }
}) 
: createBottomTabNavigator(tabScreenConfig,
{
    //Declaring a default tab color
    tabBarOptions: 
    {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);