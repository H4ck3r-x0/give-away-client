import React from "react";
import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Carousel from "react-native-snap-carousel";
import style from "./AddPostScreenStyle";
import { Banner, Title, Colors, Button, TextInput } from "react-native-paper";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function AddPostScreen({ navigation }) {
  const [visible, setVisible] = React.useState(true);
  const [options, setOptions] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera  permissions to make this work!");
        }
      }
    })();
  }, []);
  const handleTitleChange = (title) => {
    setTitle(title);
  };
  const handleDetailsChange = (details) => {
    setDetails(details);
  };
  const renderBanner = () => {
    return (
      <Banner
        visible={visible}
        actions={[
          {
            label: "Agree",
            onPress: () => setVisible(false),
            color: Colors.grey600,
          },
          {
            label: "Post Guideline",
            onPress: () => setVisible(false),
            color: Colors.grey600,
          },
          {
            label: "Cancel",
            onPress: () => {
              navigation.goBack();
            },
            color: Colors.red800,
          },
        ]}
        icon={() => <Entypo name="info" size={33} color="#FFD500" />}
      >
        <View>
          <Title style={{ color: "#14213D" }}>Posting GouideLines</Title>
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
    );
  };

  const renderLocationButton = () => {
    return (
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
        <Button
          color={"#E5E5E5"}
          icon={() => <Entypo name="location" size={24} color="black" />}
          mode="contained"
          onPress={() =>
            navigation.navigate("Location", {
              title,
              details,
              options,
            })
          }
        >
          Choose item location
        </Button>
      </View>
    );
  };
  const renderItemForm = () => {
    return (
      <>
        <View style={{ marginTop: 5, padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Button
              color={options === 0 ? Colors.green200 : "#E5E5E5"}
              icon={() => (
                <MaterialCommunityIcons
                  name="offer"
                  size={24}
                  color="#14213D"
                />
              )}
              mode="contained"
              onPress={() => setOptions(0)}
            >
              Giving away
            </Button>
            <Button
              color={options === 1 ? Colors.green200 : "#E5E5E5"}
              icon={() => (
                <Ionicons name="hand-right" size={20} color="#14213D" />
              )}
              mode="contained"
              onPress={() => setOptions(1)}
            >
              Requesting
            </Button>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: Colors.grey100,
            padding: 15,
          }}
        >
          <Button
            color={"#E5E5E5"}
            icon={() => (
              <MaterialCommunityIcons name="camera" size={24} color="black" />
            )}
            mode="contained"
            onPress={takeImageFromCamera}
          >
            Take Photo
          </Button>
          <Button
            color={"#E5E5E5"}
            icon={() => (
              <MaterialIcons name="photo-library" size={24} color="black" />
            )}
            mode="contained"
            onPress={pickImage}
          >
            Add Photo
          </Button>
        </View>

        <View style={{ margin: 10 }}>
          <TextInput
            value={title}
            onChangeText={(title) => handleTitleChange(title)}
            style={{ marginBottom: 15 }}
            mode="outlined"
            label="Title"
            placeholder="eg. Wood table, Black sofa
          "
            theme={{
              colors: {
                primary: Colors.grey500,
                underlineColor: "transparent",
              },
            }}
          />
          <TextInput
            value={details}
            onChangeText={(details) => handleDetailsChange(details)}
            multiline={true}
            numberOfLines={3}
            textAlignVertical="top"
            mode="outlined"
            label="Details"
            placeholder="size, color, item condition"
            theme={{
              colors: {
                primary: Colors.grey500,
                underlineColor: "transparent",
              },
            }}
          />
        </View>
      </>
    );
  };
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImages([...images, result.uri]);
      }
    } catch (error) {
      console.log("Error openning your studio", error);
    }
  };
  const takeImageFromCamera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImages([...images, result.uri]);
      }
    } catch (error) {
      console.log("Error openning your camera", error);
    }
  };
  const removeImage = (index) => {
    const newImages = images.filter((image, idx) => idx !== index);
    setImages(newImages);
  };
  const renderItemImages = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: item }}
          style={{
            width: 300,
            height: 180,
            borderRadius: 20,
          }}
        />
        <Pressable
          style={{ position: "absolute", top: 10, right: 10 }}
          onPress={() => removeImage(index)}
        >
          <MaterialCommunityIcons
            name="delete-forever"
            size={24}
            color="white"
          />
        </Pressable>
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <Carousel
        layout={"default"}
        data={images}
        sliderWidth={400}
        itemWidth={300}
        renderItem={renderItemImages}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraHeight={100}
      >
        {renderBanner()}
        {!visible && renderItemForm()}
        {images.length > 0 && renderCarousel()}
        {title !== "" && details !== "" ? renderLocationButton() : null}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default AddPostScreen;
