import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = (props) => 
{
    return(
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress = {props.onSelectMeal}>
                <View>
                    <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source = {{uri: props.image}} style = {styles.bgImage}>
                            <View style = {styles.titleContainer}>
                                <Text style = {styles.title} numberOfLines = {1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style = {{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
              
    );
};

const styles = StyleSheet.create({
    mealItem: 
    {
        height: 200,
        width: "100%",
        backgroundColor: "silver",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20
    },
    mealRow : 
    {
        flexDirection: "row"
    },
    mealHeader: 
    {
        height: "85%"
    },
    bgImage: 
    {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end"
    },
    mealDetail: 
    {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%"
    },
    titleContainer: 
    {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: 
    {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }
});

export default MealItem;