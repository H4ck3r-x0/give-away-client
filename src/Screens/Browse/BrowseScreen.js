import React from "react";
import { View } from "react-native";
import style from "./BrowseScreenStyle";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RequestsScreen from "../Requests/RequestsScreen";
import OffersScreen from "../Offers/OffersScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Offers"
      tabBarOptions={{
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="offer" size={24} color="#14213D" />
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="hand-right" size={20} color="#14213D" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function BrowseScreen() {
  return (
    <View style={style.container}>
      <TopTabs />
    </View>
  );
}

export default BrowseScreen;
