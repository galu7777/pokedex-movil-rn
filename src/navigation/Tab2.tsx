import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { PokeScreen } from "../screens/PokeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Navigation";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokeScreen" component={PokeScreen} />
    </Tab2.Navigator>
  );
}