import React from "react";
import { View, Text } from "react-native";
import firebase from "../../config/firbase";

function TestScreen({ navigation }) {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const DB = firebase.firestore();
    const unsubscribe = DB.collection("users").onSnapshot((snap) => {
      const newUser = snap.docs.map((doc) => doc.data());
      setUsers([...users, ...newUser]);
    });

    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>TestScreen</Text>
      {users.length > 0 &&
        users.map((user, idx) => {
          return (
            <View key={idx}>
              <Text>{user.username}</Text>
            </View>
          );
        })}
    </View>
  );
}

export default TestScreen;
