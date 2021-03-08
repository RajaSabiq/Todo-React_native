import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem({ items, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(items.key)}>
      <View style={style.item}>
        <Text>{items.text}</Text>
        <MaterialIcons name="delete" size={18} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TodoItem;
