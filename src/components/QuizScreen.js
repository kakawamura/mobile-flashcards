import React from "react";
import { Container, Button, Content, Item, Input, Text } from "native-base";
import { addCardToDeck } from "../helpers/storage";

export default class AddCardScreen extends React.Component {
  state = {
    answer: false
  };

  static navigationOptions = ({ navigation }) => {
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index;
    return {
      title: `Quiz ${index + 1}/${questions.length}`
    };
  };

  handleFlip = () => {
    this.setState(state => {
      return {
        answer: !state.answer
      };
    });
  };

  handleCorrect = () => {
    const { navigation } = this.props;
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index + 1;
    const corrects = navigation.state.params.corrects + 1;

    this.navigate(questions, index, corrects);
  };

  handleIncorrect = () => {
    const { navigation } = this.props;
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index + 1;
    const corrects = navigation.state.params.corrects;

    this.navigate(questions, index, corrects);
  };

  navigate = (questions, index, corrects) => {
    const { navigation } = this.props;
    if (questions.length > index) {
      navigation.navigate("QuizScreen", { questions, index, corrects });
      return;
    }

    console.log("done");
  };

  render() {
    const { navigation } = this.props;
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index;
    return (
      <Container>
        {this.state.answer ? (
          <Text>{questions[index].answer}</Text>
        ) : (
          <Text>{questions[index].question}</Text>
        )}
        <Button light block onPress={this.handleFlip}>
          <Text>Flip</Text>
        </Button>
        <Button success block onPress={this.handleCorrect}>
          <Text>Correct</Text>
        </Button>
        <Button danger block onPress={this.handleIncorrect}>
          <Text>Incorrect</Text>
        </Button>
      </Container>
    );
  }
}
