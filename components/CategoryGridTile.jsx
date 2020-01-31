import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,Platform,TouchableNativeFeedback} from 'react-native';


const CategoryGridTile = (props) => 
{
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21)
    {
        TouchableComponent = TouchableNativeFeedback
    }

    return (
        <View style = {styles.gridItem}>
            <TouchableComponent style = {{flex: 1}}  onPress = {props.onSelect}>
                <View style = {{...styles.container,...{backgroundColor: props.color}}}>
                    <Text style = {styles.title}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: 
    {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS == "android" && Platform.Version >= 21 ? "hidden" : "visible",
        elevation: 5,
        borderRadius: 10
    },
    container: 
    {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: 
    {
        fontFamily: "open-sans-bold",
        fontSize: 22
    }
});

export default CategoryGridTile;