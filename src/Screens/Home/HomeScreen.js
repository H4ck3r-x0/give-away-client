import React from "react";
import { View } from "react-native";
import Description from "./components/Descripion";
import Explain from "./components/Explain";
import { Divider } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Description navigation={navigation} />
      <Divider />
      <Explain navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
