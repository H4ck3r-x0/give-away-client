import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import style from "./OffersScreenStyle";
import faker from "faker";
import moment from "moment";
import { Avatar, Divider } from "react-native-paper";

const DATA = new Array(10).fill().map((_, index) => ({
  id: index.toString(),
  title: faker.lorem.sentences(1),
  body: faker.lorem.sentences(4),
  image: faker.image.image(),
  username: faker.internet.userName(),
  userAvatar: faker.image.avatar(),
  createdAt: moment(faker.datatype.datetime()).fromNow(),
}));
const Item = ({
  title,
  body,
  image,
  username,
  userAvatar,
  createdAt,
  navigation,
}) => (
  <View style={style.itemContainer}>
    <View style={style.userContainer}>
      <Avatar.Image size={35} source={{ uri: userAvatar }} />
      <Text style={style.username}>{username}</Text>
    </View>
    <Pressable
      onPress={() =>
        navigation.navigate("Request Details", {
          title,
          body,
          image,
          username,
          userAvatar,
          createdAt,
        })
      }
    >
      <Image source={{ uri: image }} style={style.itemThumbnail} />
    </Pressable>
    <Pressable onPress={() => alert("preesssd")}>
      <Text style={style.itemTitle}>{title}</Text>
    </Pressable>
    <Text style={style.itemBody}>{body}</Text>
    <Text style={style.itemCreatedAt}>{createdAt}</Text>
  </View>
);
function OffersScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        body={item.body}
        image={item.image}
        username={item.username}
        userAvatar={item.userAvatar}
        createdAt={item.createdAt}
        navigation={navigation}
      />
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
  );
}

export default OffersScreen;
