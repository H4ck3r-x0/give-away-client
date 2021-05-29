import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import BrowseScreen from "../Screens/Browse/BrowseScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreen}></Stack.Screen>
        <Stack.Screen name={"Browse"} component={BrowseScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
