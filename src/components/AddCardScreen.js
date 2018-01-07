import React from "react";
import { Container, Button, Content, Item, Input, Text } from "native-base";
import { addCardToDeck } from "../helpers/storage";

export default class AddCardScreen extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Deck"
    };
  };

  handleAnswerChange = e => {
    this.setState({
      answer: e
    });
  };

  handleQuestionChange = e => {
    this.setState({
      question: e
    });
  };

  handleSubmit = e => {
    const { question, answer } = this.state;
    const title = this.props.navigation.state.params.deck.title;
    if (question.length == 0 || answer.length == 0) {
      alert("Please insert the question and the answer");
      return;
    }

    addCardToDeck(title, { question, answer }).then(() => {
      this.props.navigation.goBack();
      this.props.navigation.state.params.updateDeck();
    });
  };

  render() {
    return (
      <Container style={{ padding: 12 }}>
        <Content>
          <Item>
            <Input
              onChangeText={this.handleQuestionChange}
              placeholder="Question"
            />
          </Item>
          <Item>
            <Input
              onChangeText={this.handleAnswerChange}
              placeholder="Answer"
            />
          </Item>
          <Button
            style={{ marginTop: 12 }}
            onPress={this.handleSubmit}
            primary
            block
          >
            <Text>Create Card</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
