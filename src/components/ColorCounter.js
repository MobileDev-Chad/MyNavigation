import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={{ fontSize: 25 }}>{color}</Text>

      <TouchableOpacity onPress={() => onIncrease()}>
        <Text>Increase - {color}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDecrease()}>
        <Text>Decrease - {color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
