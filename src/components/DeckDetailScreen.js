import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { getDeck } from "../helpers/storage";

class DeckDetailScreen extends React.Component {
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
    if (deck.questions.length == 0) {
      alert("Please add cards to your deck");
      return;
    }
    this.props.navigation.navigate("QuizScreen", {
      questions: deck.questions,
      index: 0,
      corrects: 0
    });
  };

  render() {
    const { deck } = this.state;
    return (
      <View style={{ padding: 12, textAlign: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>{deck.title}</Text>
        {deck.questions && <Text>{deck.questions.length} cards</Text>}
        <Button block style={{ marginTop: 12 }} onPress={this.handleAddCard}>
          <Text>Add Card</Text>
        </Button>
        <Button
          block
          warning
          style={{ marginTop: 12 }}
          onPress={this.handleStartQuiz}
        >
          <Text>Start Quiz</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(DeckDetailScreen);
