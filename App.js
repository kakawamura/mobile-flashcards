import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Container, Content } from "native-base";
import { Constants } from "expo";
import { StackNavigator } from "react-navigation";

import DeckListScreen from "./src/components/DeckListScreen";
import DeckDetailScreen from "./src/components/DeckDetailScreen";
import AddDeckScreen from "./src/components/AddDeckScreen";
import AddCardScreen from "./src/components/AddCardScreen";
import QuizScreen from "./src/components/QuizScreen";
import FinishQuizScreen from "./src/components/FinishQuizScreen";

const Stack = StackNavigator({
  DeckListScreen: {
    screen: DeckListScreen
  },
  DeckDetailScreen: {
    screen: DeckDetailScreen
  },
  AddDeckScreen: {
    screen: AddDeckScreen
  },
  AddCardScreen: {
    screen: AddCardScreen
  },
  QuizScreen: {
    screen: QuizScreen
  },
  FinishQuizScreen: {
    screen: FinishQuizScreen
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
