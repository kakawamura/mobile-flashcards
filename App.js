import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Container, Content } from "native-base";
import { AppLoading, Constants } from "expo";
import { StackNavigator } from "react-navigation";

import { setLocalNotification } from "./src/helpers/notifications";
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
  state = {
    isReading: false
  };
  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
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
