import React from "react";
import { IconButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BrowseScreen from "../Screens/BrowseScreen/BrowseScreen";
import RequestsScreen from "../Screens/RequestsScreen/RequestsScreen";
import OffersScreen from "../Screens/OffersScreen/OffersScreen";
import RequestDetailsScreen from "../Screens/RequestDetailsScreen/RequestDetailsScreen";
import AddPostScreen from "../Screens/AddPostScreen/AddPostScreen";
import ItemLocationScreen from "../Screens/AddPostScreen/ItemLocationScreen";
import PostPreviewScreen from "../Screens/AddPostScreen/PostPreviewScreen";
import TestScreen from "../Screens/TestScreen.js/TestScreen";
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name={"Browse"}
          component={BrowseScreen}
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <IconButton
                  icon={() => <Entypo name="plus" size={24} color="#14213D" />}
                  size={20}
                  onPress={() => navigation.navigate("Add Post")}
                />
              );
            },
          })}
        ></Stack.Screen>
        <Stack.Screen
          name={"Add Post"}
          component={AddPostScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerTitle: "Pickup Location",
          }}
          name={"Location"}
          component={ItemLocationScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={"Preview"}
          component={PostPreviewScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={"Requests"}
          component={RequestsScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={"Request Details"}
          component={RequestDetailsScreen}
        ></Stack.Screen>
        <Stack.Screen name={"Offers"} component={OffersScreen}></Stack.Screen>
        <Stack.Screen name={"TestScreen"} component={TestScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
