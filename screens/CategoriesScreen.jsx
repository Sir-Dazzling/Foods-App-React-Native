import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => 
{
    console.log(props);

    //To render grid items to screen
    const renderGridItem = (itemData) => 
    {
        return (
            <CategoryGridTile title = {itemData.item.title} color = {itemData.item.color} onSelect = {() => 
            {
                //Added a param of categoryId
                props.navigation.navigate({routeName: "CategoryMeals", params:{categoryId: itemData.item.id}});
            }} />
        );
    };

    return(
        <FlatList  data = {CATEGORIES} renderItem = {renderGridItem} numColumns = {2} />//To Output grid of Categories to Screen
    );
};

//Configuring and Styling Header
CategoriesScreen.navigationOptions = 
{
    headerTitle: "Meal Categories"
}; 

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoriesScreen;