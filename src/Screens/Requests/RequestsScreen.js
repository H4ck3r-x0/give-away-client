import React from "react";
import { View, Text, FlatList, SafeAreaView, Image } from "react-native";
import style from "./RequestsScreenStyle";
import faker from "faker";
import moment from "moment";
import { Avatar, Divider } from "react-native-paper";

const DATA = new Array(10).fill().map((value, index) => ({
  id: index.toString(),
  title: faker.lorem.sentences(1),
  body: faker.lorem.sentences(4),
  image: faker.image.image(),
  username: faker.internet.userName(),
  userAvatar: faker.image.avatar(),
  createdAt: moment(faker.datatype.datetime()).fromNow(),
}));
const Item = ({ title, body, image, username, userAvatar, createdAt }) => (
  <View style={style.itemContainer}>
    <View style={style.userContainer}>
      <Avatar.Image size={35} source={{ uri: userAvatar }} />
      <Text style={style.username}>{username}</Text>
    </View>
    <Image source={{ uri: image }} style={style.itemThumbnail} />
    <Text style={style.itemTitle}>{title}</Text>
    <Text style={style.itemBody}>{body}</Text>
    <Text style={style.itemCreatedAt}>{createdAt}</Text>
  </View>
);
function RequestsScreen() {
  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        body={item.body}
        image={item.image}
        username={item.username}
        userAvatar={item.userAvatar}
        createdAt={item.createdAt}
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

export default RequestsScreen;
