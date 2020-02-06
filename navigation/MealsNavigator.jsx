import React from 'react';
import { Text,Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

//Configuring defult Nav Stack styling
const defaultStackNavOptions =  
{
    headerStyle: 
    {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTitleStyle: 
    {
        fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: 
    {
        fontFamily: "open-sans"
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

//Creating a Navigator for the  Favorites Screen
const FavNavigator =  createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen 
}, 
{
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions
});

//Creating a Navigator for the  Filters Screen
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions,
});

//Configuring the BottomTab element
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === "android" ? <Text style = {{fontFamily: "open-sans-bold"}}>Meals</Text> : "Meals"
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

//Creating a Tab Navigator Element for Android or do the latter for Ios
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
    //Declaring a default tab styling
    tabBarOptions: 
    {
        activeTintColor: Colors.accentColor,
        labelStyle: 
        {
            fontFamily: "open-sans"
        }
    }
});

//Creating a drawer Navigator Element
const MainNavigator =  createDrawerNavigator({
    MealsFavs:
    { 
        screen: MealsFavTabNavigator,
        navigationOptions: 
        {
            drawerLabel: "Meals"
        }
    },
    Filters: FiltersNavigator
},
{
    contentOptions: 
    {
        activeTintColor: Colors.accentColor,
        labelStyel: 
        {
            fontFamily: "open-sans-bold"
        }
    }
});

export default createAppContainer(MainNavigator);