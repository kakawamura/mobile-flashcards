import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class AddDeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Deck"
    };
  };

  componentDidMount() {}

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {}
});
