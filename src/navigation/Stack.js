import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import BrowseScreen from "../Screens/Browse/BrowseScreen";
import RequestsScreen from "../Screens/Requests/RequestsScreen";
import OffersScreen from "../Screens/Offers/OffersScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={HomeScreen}></Stack.Screen>
        <Stack.Screen name={"Browse"} component={BrowseScreen}></Stack.Screen>
        <Stack.Screen
          name={"Requests"}
          component={RequestsScreen}
        ></Stack.Screen>
        <Stack.Screen name={"Offers"} component={OffersScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
