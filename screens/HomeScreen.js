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

    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
