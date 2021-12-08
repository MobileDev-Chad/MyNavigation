import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    
    <View style={styles.viewStyle}>
       {/* <Text style={styles.textStyle}>App</Text>  */}
     
        <View style={styles.boxOneStyle} />
        <View style={styles.boxTwoStyle} />
     

      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 28,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 1,
  },
  boxOneStyle: {
    borderWidth: 3,
    borderColor: "pink",
    height: 50,
    width: 100,
   
  },
  boxTwoStyle: {
    borderWidth: 3,
    borderColor: "blue",
    height: 50,
    width: 100,
    alignSelf: 'flex-end',
  },
  boxThreeStyle: {
    borderWidth: 3,
    borderColor: "green",
    height: 50,
    width: 100,
    
  },
});

export default BoxScreen;
