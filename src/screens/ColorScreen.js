import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setColors([...colors, getRandomColor()])}
      >
        <Text>Add a Color</Text>
      </TouchableOpacity>

     

<FlatList
      keyExtractor={(item) => item}
      data={colors}
      renderItem={({ item }) => {
        return  <View
        style={{ height: 100, width: 100, backgroundColor: item }}
      />;
      }}
    />

    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
