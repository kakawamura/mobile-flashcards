import React from "react";
import { Container, Button, Content, Item, Input, Text } from "native-base";

import { saveDeckTitle } from "../helpers/storage";

export default class AddDeckScreen extends React.Component {
  state = {
    title: ""
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Deck"
    };
  };

  componentDidMount() {}

  handleChange = e => {
    this.setState({
      title: e
    });
  };

  handleSubmit = e => {
    const { title } = this.state;
    if (title.length == 0) {
      alert("Please insert the title");
      return;
    }

    saveDeckTitle(title).then(() => {
      this.props.navigation.goBack();
      this.props.navigation.state.params.updateDecks();
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input onChangeText={this.handleChange} placeholder="Deck title" />
          </Item>
          <Button onPress={this.handleSubmit} primary blocked>
            <Text>Create Deck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
