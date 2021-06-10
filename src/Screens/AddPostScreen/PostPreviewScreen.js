import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import style from "./RequestDetailsScreenStyle";
import { Divider, Avatar } from "react-native-paper";
import Slideshow from "react-native-slideshow-improved";
import MapView, { Marker } from "react-native-maps";
import ImageViewer from "react-native-image-zoom-viewer";
import firebase from "../../config/firbase";
import "firebase/storage";
function PostPreviewScreen({ navigation, ...props }) {
  const { title, details, options, itemLocation, images } =
    props.route.params && props.route.params;
  const [imagesModal, setImagesModal] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    let newImages = [];
    if (images.length > 0) {
      images.map((image, idx) => {
        newImages.push({ url: image.url });
      });
      setSliderImages(newImages);
    }
  }, []);
  const showModal = () => {
    setImagesModal(true);
  };
  const hideModal = () => {
    setImagesModal(false);
  };
  const imagesModalViewer = () => {
    return (
      <Modal
        animationType="fade"
        visible={imagesModal}
        onRequestClose={hideModal}
        transparent={true}
      >
        <ImageViewer
          enableSwipeDown
          imageUrls={sliderImages}
          onSwipeDown={hideModal}
        />
      </Modal>
    );
  };
  const slider = () => {
    return (
      <Slideshow
        indicatorSize={12}
        indicatorColor={"#14213D"}
        arrowSize={sliderImages.length > 1 ? 12 : 0}
        height={Dimensions.get("window").width}
        dataSource={sliderImages}
        onPress={showModal}
      />
    );
  };

  async function uploadImageAsync(image) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed")); // error occurred, rejecting
      };
      xhr.responseType = "blob"; // use BlobModule's UriHandler
      xhr.open("GET", image.url, true); // fetch the blob from uri in async mode
      xhr.send(null); // no initial data
    });

    // do something with the blob, eg. upload it to firebase (API v5.6.0 below)
    const ref = firebase.storage().ref().child(`images/${image.imageName}`);
    const snapshot = await ref.put(blob);
    const remoteUri = await snapshot.ref.getDownloadURL();

    // when we're done sending it, close and release the blob
    blob.close();

    // return the result, eg. remote URI to the image
    return remoteUri;
  }

  const savePost = async () => {
    images.forEach((image) => {
      uploadImageAsync(image)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    });

    // const DB = firebase.firestore();
    // DB.collection("give_items")
    //   .add({
    //     title,
    //     details,
    //     itemLocation: JSON.stringify(itemLocation),
    //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   })
    //   .then((docRef) => {
    //     console.log(docRef);
    //   })
    //   .catch((error) => {
    //     console.log("error adding post", error);
    //   });
  };
  return (
    <SafeAreaView style={style.container}>
      {sliderImages.length > 0 && imagesModalViewer()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.userContainer}>
          <Avatar.Image
            size={48}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
          <View style={{}}>
            <Text style={style.username}>{"Mohammed"}</Text>
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
        {sliderImages.length > 0 && slider()}
        <Text style={style.itemTitle}>{title}</Text>
        <Text style={style.itemBody}>{details}</Text>
        <Divider style={{ marginTop: 20 }} />
        <View
          style={{ flexDirection: "column", paddingLeft: 4, paddingTop: 10 }}
        ></View>
        <View
          style={{
            flexDirection: "column",
            paddingLeft: 4,
            paddingTop: 10,
            paddingBottom: 15,
          }}
        >
          <Text style={style.itemPostedBy}>Pick up Location</Text>
          <MapView
            initialRegion={{
              latitude: itemLocation.latitude,
              longitude: itemLocation.longitude,
              latitudeDelta: 0.0041,
              longitudeDelta: 0.0021,
            }}
            cacheEnabled
            provider="google"
            style={{ width: Dimensions.get("window").width, height: 400 }}
          >
            {itemLocation && (
              <Marker
                coordinate={itemLocation}
                title={"The item location to pickup"}
                pinColor="red"
              />
            )}
          </MapView>
          <Pressable
            style={{
              alignItems: "center",
              padding: 10,
              backgroundColor: "#E5E5E5",
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            onPress={savePost}
          >
            <Text>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostPreviewScreen;
