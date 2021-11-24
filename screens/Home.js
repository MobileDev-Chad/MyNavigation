import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest: ["Chad", "Dillon", "Amy"],
      following: ["William"],
    };
  }

  doFollow = (index) => {
    const { followRequest, following } = this.state;

    const followNew = followRequest.splice(index, 1);
    following.push(followNew);

    this.setState({
      followRequest,
      following,
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text>You are following {this.state.following.length} friend</Text>
        <Button
          title="Go to Follow page"
          onPress={() => {
            this.props.navigation.navigate("Follow", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow,
            });
          }}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
