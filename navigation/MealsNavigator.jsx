import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';

//Creating a Stack Navigator Element
const MealsNavigator =  createStackNavigator({
    Categories: 
    {
        screen: CategoriesScreen,
        navigationOptions: 
        {
            headerTitle: "Meal Categories"
        } 
    },
    CategoryMeals: 
    {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailsScreen
},
    {
        initialRouteName: "Categories",
        defaultNavigationOptions: 
        {
            headerStyle: 
            {
                backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
            },
            headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
            headerTitle: "Meals App"
        }
    }
);

//Creating a Tab Navigator Element
const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
},
{
    tabBarOptions: 
    {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);