import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Constants } from "expo";
import { StackNavigator } from "react-navigation";

import DeckListScreen from "./src/components/DeckListScreen";
import DeckDetailScreen from "./src/components/DeckDetailScreen";

const Stack = StackNavigator({
  DeckListScreen: {
    screen: DeckListScreen
  },
  DeckDetailScreen: {
    screen: DeckDetailScreen
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent />
        <Stack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
