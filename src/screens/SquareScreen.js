import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue:number};
  // action === {type: 'red || 'green || 'blue', payload: 10 || -10}

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case "red":
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //         return;
  //       case "green":
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change);
  //         return;
  //       case "blue":
  //         blue + change > 255 || blue + change < 0
  //           ? null
  //           : setBlue(blue + change);
  //         return;
  //       default:
  //         return;
  //     }
  //   };

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
