import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Hello There..</Text>
      <Button mode="contained">Press me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
