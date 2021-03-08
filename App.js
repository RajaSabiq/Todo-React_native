import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTODO from "./Components/AddTODO";

export default function App() {
  const [todo, setTodo] = useState([
    {
      text: "Working on KingCobbler",
      key: "1",
    },
    {
      text: "Working On Usama Application",
      key: "2",
    },
  ]);
  const addNewTodo = (newTodo) => {
    setTodo((prevTodo) => {
      return [
        ...prevTodo,
        {
          text: newTodo,
          key: Math.random().toString(),
        },
      ];
    });
  };
  const removeItem = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todos) => todos.key != id);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/**  header */}
        <Header />
        <View style={styles.content}>
          {/** Form */}
          <AddTODO onPress={addNewTodo} />
          {/** List */}
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem items={item} pressHandler={removeItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
