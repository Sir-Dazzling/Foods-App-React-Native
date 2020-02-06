import React, {useEffect, useCallback} from 'react';
import {ScrollView,View,Image,Text,StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavorite} from '../store/actions/meals';

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
     //Getting Meals from reducers with Hooks
     const availableMeals= useSelector(state => state.meals.meals);

    //Getting param value from previous screen
    const mealId = props.navigation.getParam("mealId");

    //To find out all the meal details that belong to the meal in which the user clicked on
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    //Firing action when user clicks on save to favorites icon
    const dispatch =  useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

   useEffect(() => 
   {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
   }, [toggleFavoriteHandler])

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
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
        <Item title = "Favorite" iconName = "ios-star-outline" onPress = {toggleFavorite} />
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