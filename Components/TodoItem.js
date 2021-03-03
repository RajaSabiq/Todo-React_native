import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function TodoItem({ items, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(items.key)}>
      <Text style={style.item}>{items.text}</Text>
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
  },
});
export default TodoItem;
