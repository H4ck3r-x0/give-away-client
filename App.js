import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeStack from "./src/navigation/Stack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeStack />
    </>
  );
}
