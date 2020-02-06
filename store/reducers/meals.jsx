import {ToastAndroid} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

//Initializing the state
const initialState = 
{
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => 
{
    switch(action.type)
    {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) //removing food from favorites array
            {
                const updateFavMeals = [...state.favoriteMeals];
                updateFavMeals.splice(existingIndex, 1)
                ToastAndroid.show("Removed from favorites", ToastAndroid.SHORT);
                return { ...state, favoriteMeals: updateFavMeals};
                
            }
            else//Adding new Food to favorites array
            { 
                const meal = state.meals.find(meal => meal.id === action.mealId);
                ToastAndroid.show("Added to favorites", ToastAndroid.SHORT);
                return{...state, favoriteMeals: state.favoriteMeals.concat(meal)};
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
               if(appliedFilters.glutenFree && !meal.isGlutenFree)
               {
                    return false;
               }
               if(appliedFilters.lactoseFree && !meal.isLactoseFree)
               {
                    return false;
               }
               if(appliedFilters.vegetarian && !meal.isVegetarian)
               {
                    return false;
               }
               if(appliedFilters.vegan && !meal.isVegan)
               {
                    return false;
               }
               return true;
            }); 
            return {...state, filteredMeals: updatedFilteredMeals};
        default:
            return state;
    }
};

export default mealsReducer;