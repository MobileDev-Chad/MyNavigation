// import React, {useState} from "react";
import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const reducer = (state, action) => {
  // state === {count: number};
  // action === {type: 'increase || 'decrease', payload: 1 || -1}

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };

    case "decrease":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch({ type: "increase", payload: 1})}
      >
        <Text>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          dispatch({ type: "decrease", payload: 1 })
        }
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Current Count:{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
