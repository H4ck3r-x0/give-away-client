import { StyleSheet, Dimensions } from "react-native";

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
  itemContainer: {
    marginBottom: 20,
  },
  itemThumbnail: {
    width: "100%",
    height: 300,
  },
  itemTitle: {
    // width: "100%",
    flexWrap: "wrap",
    paddingLeft: 8,
    paddingTop: 6,
    color: "#14213D",
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  username: {
    marginLeft: 8,
    fontWeight: "700",
    color: "#14213D",
  },
  itemBody: {
    width: "100%",
    fontSize: 14,
    color: "red",
    paddingLeft: 8,
    paddingBottom: 10,
    flexWrap: "wrap",
  },
  itemCreatedAt: {
    marginLeft: 8,
    marginTop: 10,
    fontWeight: "400",
    fontSize: 12,
    color: "#ccc",
  },
  map: {
    // flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 170,
  },
});

export default style;
