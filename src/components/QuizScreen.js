import React from "react";
import {
  View,
  Container,
  Button,
  Content,
  Item,
  Input,
  Text
} from "native-base";
import { addCardToDeck } from "../helpers/storage";

export default class QuizScreen extends React.Component {
  state = {
    answer: false,
    questions: [],
    index: 0,
    corrects: 0
  };

  static navigationOptions = ({ navigation }) => {
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index;
    return {
      title: "Quiz"
    };
  };

  componentDidMount() {
    const { navigation } = this.props;
    const questions = navigation.state.params.questions;
    const index = navigation.state.params.index;
    this.setState({
      questions,
      index
    });
  }

  handleFlip = () => {
    this.setState(state => {
      return {
        answer: !state.answer
      };
    });
  };

  handleCorrect = () => {
    const { navigation } = this.props;
    const { index, questions, corrects } = this.state;
    if (questions.length <= index + 1) {
      this.navigate(questions, corrects + 1);
      return;
    }
    this.setState(state => {
      return {
        ...state,
        index: state.index + 1,
        corrects: state.corrects + 1,
        answer: false
      };
    });
  };

  handleIncorrect = () => {
    const { navigation } = this.props;
    const { index, questions, corrects } = this.state;
    if (questions.length <= index + 1) {
      this.navigate(questions, corrects);
      return;
    }
    this.setState(state => ({
      ...state,
      index: state.index + 1,
      answer: false
    }));
  };

  navigate = (questions, corrects) => {
    const { navigation } = this.props;

    this.setState({
      answer: false,
      index: 0,
      corrects: 0
    });

    navigation.navigate("FinishQuizScreen", {
      questions,
      corrects: corrects,
      key: navigation.state.key
    });
  };

  render() {
    const { navigation } = this.props;
    const { questions, index } = this.state;
    if (questions.length <= index) {
      return null;
    }
    return (
      <Container style={{ padding: 12 }}>
        <View>
          <Text>
            {index + 1} / {questions.length}
          </Text>
        </View>
        {this.state.answer ? (
          <View>
            <Text style={{ color: "#888" }}>Answer:</Text>
            <Text style={{ fontSize: 24 }}>{questions[index].answer}</Text>
          </View>
        ) : (
          <View>
            <Text style={{ color: "#888" }}>Question:</Text>
            <Text style={{ fontSize: 24 }}>{questions[index].question}</Text>
          </View>
        )}
        <Button style={{ marginTop: 12 }} light block onPress={this.handleFlip}>
          <Text>Flip</Text>
        </Button>
        <Button
          style={{ marginTop: 12 }}
          success
          block
          onPress={this.handleCorrect}
        >
          <Text>Correct</Text>
        </Button>
        <Button
          style={{ marginTop: 12 }}
          danger
          block
          onPress={this.handleIncorrect}
        >
          <Text>Incorrect</Text>
        </Button>
      </Container>
    );
  }
}
