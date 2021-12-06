import React, {useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";


const CounterScreen = () => {

const [counter, setCounter]= useState(0);

  return (
    <View>

        <TouchableOpacity onPress={() => setCounter(counter + 1) }>
        <Text>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        <Text>Decrease</Text>
      </TouchableOpacity>
   <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;