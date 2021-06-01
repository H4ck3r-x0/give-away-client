import React from "react";
import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import style from "./RequestDetailsScreenStyle";
import moment from "moment";
import faker from "faker";
import { Avatar, Divider } from "react-native-paper";
import Slideshow from "react-native-slideshow-improved";
import MapView from "react-native-maps";

const IMAGES = new Array(10).fill().map((_, index) => ({
  url: faker.image.image(),
}));
function RequestDetailsScreen({ ...props }) {
  const { title, body, image, username, userAvatar, createdAt } =
    props.route?.params;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slideshow
          indicatorSize={12}
          indicatorColor={"#14213D"}
          arrowSize={12}
          height={Dimensions.get("window").width * (4 / 5.3)}
          dataSource={IMAGES}
        />
        {/* <Image source={{ uri: image }} s tyle={style.itemThumbnail} /> */}
        <Text style={style.itemTitle}>{title}</Text>
        <Text style={style.itemBody}>{body}</Text>
        <Divider style={{ marginTop: 20 }} />
        <View
          style={{ flexDirection: "column", paddingLeft: 4, paddingTop: 10 }}
        >
          <Text style={style.itemPostedBy}>Posted by</Text>
          <View style={style.userContainer}>
            <Avatar.Image size={48} source={{ uri: userAvatar }} />
            <View style={{}}>
              <Text style={style.username}>{username}</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: "#ccc",
                  marginLeft: 7,
                  marginTop: 3,
                }}
              >
                20 Offers / 1 Request
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{ flexDirection: "column", paddingLeft: 4, paddingTop: 10 }}
        >
          <Text style={style.itemPostedBy}>Location</Text>
          <MapView
            provider="google"
            style={{ width: Dimensions.get("window").width, height: 400 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RequestDetailsScreen;
