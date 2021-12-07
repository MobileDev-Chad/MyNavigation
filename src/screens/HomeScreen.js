import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ComponentsScreen')}>
        <Text>Go to Components</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to Lists</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text>Go to Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text>Go to Count</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Square')}>
        <Text>Go to Square Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Text')}>
        <Text>Go to Text Demo</Text>
      </TouchableOpacity>

    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
