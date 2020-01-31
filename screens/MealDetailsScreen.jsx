import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props) => 
{
    //Getting param value from previous screen
    const mealId = props.navigation.getParam("mealId");

    //To find out all the meal details that belong to the meal in which the user clicked on
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <View style = {styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title = "Go Back to Categories" onPress = {() => {
                props.navigation.popToTop();//To navigate back to the Home/First Screen
               // props.navigation.replace();//Used mainly for Login Screen
            }} />
        </View>
    );
};

//Configuring and Styling Header
MealDetailsScreen.navigationOptions = (navigationData) =>
{
  const mealId = navigationData.navigation.getParam("mealId");

  //To find Category details in which user clicked on
  const selectedMeal = MEALS.find(meal => meal.id === mealId );

  return {
    headerTitle: selectedMeal.title,
    //headerRight: <Text>FAV!</Text>
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
        <Item title = "Favorite" iconName = "ios-star-outline" onPress = {() => {
            console.log("Mark as Favorite");
        }} />
        </HeaderButtons>
    )
    
  };
}; 

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailsScreen;