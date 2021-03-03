import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={style.header}>
      <Text style={style.title}>My Todo</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    padding: 38,
    height: 50,
    backgroundColor: "white",
    elevation: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;
