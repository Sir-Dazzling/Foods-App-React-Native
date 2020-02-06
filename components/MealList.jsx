import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';

import MealItem from '../components/MealItem';

const MealList = (props) =>
{
    //To render or display Meal Items
    const renderMealItem = (itemData) => 
    {
        return (
            <MealItem title = {itemData.item.title} duration = {itemData.item.duration} complexity = {itemData.item.complexity} affordability = {itemData.item.affordability} image = {itemData.item.imageUrl} onSelectMeal = {() => 
                {
                    //Adding a param of MealId
                    props.navigation.navigate({routeName: "MealDetails", params: {mealId: itemData.item.id, mealTitle: itemData.item.title}});
                }} />
        );
    };

    return(
        <View style = {styles.list}>
           <FlatList data = {props.listData} renderItem = {renderMealItem} style = {{width: "100%"}} />
        </View>
    );
};

//Adding Styles
const styles = StyleSheet.create({
    list: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
});

export default MealList;