import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    paddingTop: 10,
    alignItems: "center",
  },
  question: {
    color: "#FCA311",
  },
  textDescription: {
    paddingTop: 5,
    color: "#000000",
    paddingBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  giveButton: {
    backgroundColor: "#FFD500",
  },
});

export default style;
