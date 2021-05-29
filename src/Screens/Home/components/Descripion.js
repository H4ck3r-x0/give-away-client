import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Title, Button } from "react-native-paper";
import { View, Text } from "react-native";
import style from "../HomeScreenStyle";

export default function Description({ ...props }) {
  return (
    <View style={style.description}>
      <Title style={style.question}>Wnat free stuff?</Title>
      <Title style={style.question}>Got stuff to give away?</Title>
      <Text style={style.textDescription}>
        You can give or get free stuff in your local community.
      </Text>
      <View style={style.buttonsContainer}>
        <Button
          icon={() => <Entypo name="plus" size={22} color="#FFD500" />}
          uppercase={false}
          mode="contained"
          color="#5C0099"
        >
          Give
        </Button>
        <Button
          uppercase={false}
          icon={() => (
            <MaterialIcons name="read-more" size={22} color="#FFD500" />
          )}
          color="#5C0099"
          mode="contained"
          onPress={() => props.navigation.navigate("Browse")}
        >
          Browse
        </Button>
      </View>
    </View>
  );
}
