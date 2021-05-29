import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    backgroundColor: "#3D0066",
    paddingTop: 10,
    alignItems: "center",
  },
  question: {
    color: "#FFD500",
  },
  textDescription: {
    paddingTop: 5,
    color: "#fff",
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
