import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

function AddTODO({ onPress }) {
  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (val) => {
    setNewTodo(val);
  };

  const addTodo = () => {
    if (newTodo.length > 3) {
      onPress(newTodo);
    } else {
      Alert.alert("OOPS", "Todo Much be longer then 3 letters", [
        { text: "understood" },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        onChangeText={changeHandler}
      />
      <Button onPress={addTodo} title="Add" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
export default AddTODO;
