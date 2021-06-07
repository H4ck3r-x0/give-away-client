import React from "react";
import { View, SafeAreaView } from "react-native";
import Description from "./components/Descripion";
import Explain from "./components/Explain";
import { Divider } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Description navigation={navigation} />
        <Divider />
        <Explain navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
