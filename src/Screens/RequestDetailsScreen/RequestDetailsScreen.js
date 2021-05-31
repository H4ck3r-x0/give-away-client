import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import style from "./RequestDetailsScreenStyle";
import faker from "faker";
import moment from "moment";
import { Avatar, Divider } from "react-native-paper";
import Slideshow from "react-native-slideshow-improved";

const IMAGES = new Array(10).fill().map((_, index) => ({
  url: faker.image.image(),
}));
function RequestDetailsScreen({ ...props }) {
  const { title, body, image, username, userAvatar, createdAt } =
    props.route?.params;

  return (
    <SafeAreaView style={style.container}>
      <Slideshow
        indicatorSize={12}
        indicatorColor={"#14213D"}
        arrowSize={12}
        height={Dimensions.get("window").width * (4 / 5.3)}
        dataSource={IMAGES}
      />
      {/* <Image source={{ uri: image }} style={style.itemThumbnail} /> */}
      <Text style={style.itemTitle}>{title}</Text>
      <Text style={style.itemBody}>{body}</Text>
    </SafeAreaView>
  );
}

export default RequestDetailsScreen;
