import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, Circle } from "react-native-maps";
import style from "./AddPostScreenStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function ItemLocationScreen({ navigation, ...props }) {
  const { title, details, options, images } =
    props.route.params && props.route.params;
  const [userLocation, setUserLocation] = useState(null);
  const [itemLocation, setItemLocation] = useState(null);
  const [locationError, setLocationError] = React.useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      if (location !== null || location !== undefined) {
        location.coords.latitudeDelta = 0.0041;
        location.coords.longitudeDelta = 0.0021;

        setUserLocation(location.coords);
        setItemLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    })();
  }, []);

  const renderMapView = () => {
    return (
      <MapView
        initialRegion={userLocation}
        provider="google"
        style={style.map}
        showsUserLocation
        showsMyLocationButton
      >
        {itemLocation && (
          <Marker
            draggable
            coordinate={itemLocation}
            title={"This is you"}
            pinColor="red"
            onDragEnd={(e) => {
              setItemLocation(e.nativeEvent.coordinate);
            }}
          />
        )}
      </MapView>
    );
  };
  const renderConfirmButton = () => {
    return (
      <View
        style={{
          backgroundColor: "#E5E5E5",
          padding: 10,
          marginTop: 10,
          marginRight: 30,
          marginLeft: 30,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() =>
            navigation.navigate("Preview", {
              title,
              details,
              options,
              itemLocation,
              images,
            })
          }
        >
          <Ionicons name="checkmark-done-circle" size={24} color="#14213D" />
          <Text
            style={{
              color: "#14213D",
              fontSize: 16,
              marginLeft: 5,
              fontWeight: "600",
            }}
          >
            Confirm Pickup Location
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderMapView()}
      {renderConfirmButton()}
    </View>
  );
}

export default ItemLocationScreen;
