import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { getDeck } from "../helpers/storage";

class DeckDetail extends React.Component {
  state = {
    deck: {}
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title} Deck`
    };
  };

  componentDidMount() {
    this.updateDeck();
  }

  updateDeck = () => {
    const title = this.props.navigation.state.params.title;
    getDeck(title).then(deck => {
      this.setState({
        deck
      });
    });
  };

  handleAddCard = () => {
    this.props.navigation.navigate("AddCardScreen", {
      deck: this.state.deck,
      updateDeck: this.updateDeck
    });
  };

  handleStartQuiz = () => {
    const { deck } = this.state;
    this.props.navigation.navigate("QuizScreen", {
      questions: deck.questions,
      index: 0,
      corrects: 0
    });
  };

  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        {deck.questions && <Text>{deck.questions.length} cards</Text>}
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

export default withNavigation(DeckDetail);

const styles = StyleSheet.create({
  container: {}
});
