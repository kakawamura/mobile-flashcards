import React from "react";
import { Container, Button, Text } from "native-base";

export default class FinishQuizScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Finish"
    };
  };

  componentDidMount() {}

  handleRestart = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack(navigation.state.params.key);
  };

  render() {
    const { navigation } = this.props;
    const questions = navigation.state.params.questions;
    const corrects = navigation.state.params.corrects;

    return (
      <Container style={{ padding: 12 }}>
        <Text
          style={{ fontSize: 32, textAlign: "center", margin: 12 }}
        >{`${corrects} / ${questions.length}`}</Text>
        <Button
          style={{ marginTop: 12 }}
          block
          primary
          onPress={this.handleRestart}
        >
          <Text>Restart Quiz</Text>
        </Button>
        <Button style={{ marginTop: 12 }} block light onPress={this.handleBack}>
          <Text>Back To Deck</Text>
        </Button>
      </Container>
    );
  }
}
