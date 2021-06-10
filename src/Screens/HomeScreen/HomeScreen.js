import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
          onPress={() => navigation.navigate("TestScreen")}
          style={{ margin: 20, backgroundColor: "purple", padding: 10 }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Test Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
