import React from "react";
import { View, Text } from "react-native";
function PostPreviewScreen({ navigation, ...props }) {
  const { title, details, options, itemLocation } =
    props.route.params && props.route.params;

  return (
    <View>
      <Text>Post title {title}</Text>
      <Text>Item Location {JSON.stringify(itemLocation)}</Text>
    </View>
  );
}

export default PostPreviewScreen;
