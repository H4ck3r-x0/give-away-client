import React from "react";
import { View } from "react-native";
import Description from "./components/Descripion";
import Explain from "./components/Explain";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Description navigation={navigation} />
      <Explain navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
