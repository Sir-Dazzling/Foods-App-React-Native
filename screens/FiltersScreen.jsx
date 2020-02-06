import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch} from 'react-redux';
import {View,Text,StyleSheet, Switch, Platform, ToastAndroid} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {setFilters} from '../store/actions/meals';


const FilterSwitch = (props) => 
{
    return (
        <View style = {styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch trackColor = {{true: Colors.primaryColor}} thumbColor = {Platform.OS === "android" ? Colors.primaryColor : "" } value = {props.state} onValueChange = {props.onChange} />
        </View>
    );
};

const FiltersScreen = (props) => 
{
    //Extracting Navigation props
    const {navigation} = props

    //Setting State to true or false
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => 
    {
        const appliedFilters = 
        {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters));

        //Displaying a toast notification to show filters were saved successfully
        ToastAndroid.show("Filters saved Successfully", ToastAndroid.SHORT);

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    //Saving items and setting params in Navigation
    useEffect(() => 
    {
        navigation.setParams({save: saveFilters})
    }, [saveFilters]);

    return(
        <View style = {styles.screen}>
            <Text style = {styles.title}>Available Filters/ Restrictions</Text>
            <FilterSwitch label = "Gluten-Free" state = {isGlutenFree} onChange = {newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label = "Lactose-Free" state = {isLactoseFree} onChange = {newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label = "Vegan" state = {isVegan} onChange = {newValue => setIsVegan(newValue)} />
            <FilterSwitch label = "Vegetarian" state = {isVegetarian} onChange = {newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

//Adding Navigation options
FiltersScreen.navigationOptions = (navData) =>
{
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => 
        (
            <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                <Item title = "Menu" iconName = "ios-menu" onPress = {() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        ),
        headerRight: () => 
        (
            <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                <Item title = "Save" iconName = "ios-save" onPress = {
                    //Retrieving params stored in the save key
                    navData.navigation.getParam("save")
                }
                    />
            </HeaderButtons>
        ) 
    };
    
};

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        alignItems: "center"
    },
    title : 
    {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: 
    {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginVertical: 10
    }
});

export default FiltersScreen;