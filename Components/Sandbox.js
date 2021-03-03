import React from "react";
import { StyleSheet, View } from "react-native";

function Sandbox() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
});
export default Sandbox;
