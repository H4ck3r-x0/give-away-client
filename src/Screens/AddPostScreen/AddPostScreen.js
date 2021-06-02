import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import style from "./AddPostScreenStyle";
import { Banner, Title, Colors } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

function AddPostScreen({ navigation }) {
  const [visible, setVisible] = React.useState(true);

  return (
    <SafeAreaView style={style.container}>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Agree",
            onPress: () => setVisible(false),
            color: Colors.grey600,
          },
          {
            label: "Post Guidline",
            onPress: () => setVisible(false),
            color: Colors.grey600,
          },
          {
            label: "Cancle",
            onPress: () => navigation.navigate("Browse"),
            color: Colors.red800,
          },
        ]}
        icon={() => <Entypo name="info" size={33} color="#FFD500" />}
      >
        <View>
          <Title style={{ color: "#14213D" }}>Posting Guideliens</Title>
          <Text
            style={{
              paddingTop: 2,
              fontWeight: "700",
              color: Colors.grey600,
            }}
          >
            Just remember that every item posted should be free, legal and
            family-friendly. No services, promotions or advertising.
          </Text>
        </View>
      </Banner>
      {!visible && <Text>Form is here to post something babeee</Text>}
    </SafeAreaView>
  );
}

export default AddPostScreen;
