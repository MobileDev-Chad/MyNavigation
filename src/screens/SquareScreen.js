import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [counter, setCounter] = useState(0);

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
      <ColorCounter title="red" />
      <ColorCounter title="green" />
      <ColorCounter title="blue" />

      <View
        style={{ height: 100, width: 100, backgroundColor: getRandomColor() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
