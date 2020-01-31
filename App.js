import React, { useState } from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

//Declaring the useScreens Element
enableScreens();

//Declaring Font Constant
const fetchFonts = () => 
{
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};


export default function App() 
{
  //Setting the State of the FontLoaded to false
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded)//If fontLoaded is false
  {
    return <AppLoading startAsync = {fetchFonts} onFinish = {() => setFontLoaded(true)} />
  }
  
  return  <MealsNavigator />;
}
