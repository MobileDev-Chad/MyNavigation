import React, {useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";


const ColorCounter = ({title}) => {

const [colorCount, setColorCount]= useState(0);

  return (
    <View>

<Text style={{fontSize: 25}}>{title}</Text>

        <TouchableOpacity onPress={() => setColorCount(colorCount + 10) }>
        <Text>Increase - {title}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setColorCount(colorCount - 10)}>
        <Text>Decrease - {title}</Text>
      </TouchableOpacity>
   
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;