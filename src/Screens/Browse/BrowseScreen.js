import React from "react";
import { View, Text } from "react-native";
import { Title, Button } from "react-native-paper";
import style from "./BrowseScreenStyle";
import { Entypo } from "@expo/vector-icons";
function BrowseScreen() {
  return (
    <View style={style.container}>
      <Text style={style.textDescription}>
        You can give or get free stuff in things in you local community.
      </Text>
    </View>
  );
}

export default BrowseScreen;
