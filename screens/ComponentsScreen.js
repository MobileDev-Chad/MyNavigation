import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

const name = <Text>chad</Text>;

  return (
    <View>
  <Text style={styles.headText}>Getting started with react native!</Text>
  <Text style={styles.subText}>My name is {name}</Text>
  
  </View>
  )
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },

});

export default ComponentsScreen;
