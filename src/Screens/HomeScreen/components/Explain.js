import React from "react";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Title, Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";

export default function Explain({ ...props }) {
  return (
    <List.Section>
      <List.Subheader style={{ fontSize: 20 }}>How it works?</List.Subheader>
      <View style={{ marginLeft: 15 }}>
        <List.Item
          style={{ marginLeft: -2 }}
          title="Post an Item"
          left={() => (
            <MaterialIcons name="post-add" size={25} color="#14213D" />
          )}
        />
        <List.Item
          title="Choose a recipient"
          left={() => <Feather name="user-check" size={25} color="#14213D" />}
        />
        <List.Item
          title="Arrange pickup"
          left={() => (
            <Ionicons
              style={{ marginLeft: -2 }}
              name="time-outline"
              size={25}
              color="#14213D"
            />
          )}
        />
        <List.Item
          title="Repeat"
          left={() => (
            <Ionicons
              style={{ marginLeft: -1 }}
              name="repeat"
              size={25}
              color="#14213D"
            />
          )}
        />
      </View>
    </List.Section>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDC500",
  },
});
