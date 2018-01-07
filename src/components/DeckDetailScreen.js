import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.deck.title} Deck`
    };
  };

  handleAddCard = () => {
    console.log("move to add card screen");
  };
  handleStartQuiz = () => {
    console.log("move to start quiz screen");
  };

  render() {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <TouchableOpacity onPress={this.handleAddCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleStartQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
