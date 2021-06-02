import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
import style from "./RequestDetailsScreenStyle";
import faker from "faker";
import { Avatar, Divider } from "react-native-paper";
import Slideshow from "react-native-slideshow-improved";
import MapView from "react-native-maps";
import ImageViewer from "react-native-image-zoom-viewer";

const IMAGES = new Array(3).fill().map((_, index) => ({
  url: faker.image.image(),
}));

function RequestDetailsScreen({ ...props }) {
  const { title, body, image, username, userAvatar, createdAt } =
    props.route?.params;
  const [imagesModal, setImagesModal] = useState(false);

  const showModal = () => {
    setImagesModal(true);
  };
  const hideModal = () => {
    setImagesModal(false);
  };

  return (
    <SafeAreaView style={style.container}>
      <Modal
        animationType="fade"
        visible={imagesModal}
        onRequestClose={hideModal}
        transparent={true}
      >
        <ImageViewer
          imageUrls={IMAGES}
          enableSwipeDown
          onSwipeDown={hideModal}
        />
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slideshow
          indicatorSize={12}
          indicatorColor={"#14213D"}
          arrowSize={12}
          height={Dimensions.get("window").width * (4 / 5.3)}
          dataSource={IMAGES}
          onPress={showModal}
        />
        <Text style={style.itemTitle}>{title}</Text>
        <Text style={style.itemBody}>{body}</Text>
        <Text style={style.itemCreatedAt}>{createdAt}</Text>

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
          style={{
            flexDirection: "column",
            paddingLeft: 4,
            paddingTop: 10,
            paddingBottom: 15,
          }}
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
