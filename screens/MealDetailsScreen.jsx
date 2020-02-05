import React from 'react';
import {ScrollView,View,Image,Text,Button,StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

//Creating a List item to display in the ScollView
const ListItem = (props) => 
{
    return (
        <View style = {styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailsScreen = (props) => 
{
    //Getting param value from previous screen
    const mealId = props.navigation.getParam("mealId");

    //To find out all the meal details that belong to the meal in which the user clicked on
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <ScrollView>
            <Image source = {{uri: selectedMeal.imageUrl}} style = {styles.image} />
            <View style = {styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style = {styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key = {ingredient}>{ingredient}</ListItem>)}
            <Text style = {styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key = {step}>{step}</ListItem>)}
        </ScrollView>
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
    title: 
    {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center"
    },
    image: 
    {
        width: "100%",
        height: 200
    },
    details: 
    {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    listItem: 
    {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailsScreen;