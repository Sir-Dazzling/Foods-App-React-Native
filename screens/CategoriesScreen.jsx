import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {CATEGORIES} from "../data/dummy-data";
import HeaderButton from '../components/HeaderButton';
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
CategoriesScreen.navigationOptions = (navData) =>
{
    return {
        headerTitle: "Meal Categories",
        headerLeft: () => 
        (
            <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                <Item title = "Menu" iconName = "ios-menu" onPress = {() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    };
}; 

export default CategoriesScreen;