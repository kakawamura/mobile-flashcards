import React from "react";
import {
  Container,
  Button,
  Label,
  Content,
  Item,
  Input,
  Text
} from "native-base";

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
      <Container style={{ padding: 12 }}>
        <Content>
          <Item>
            <Input onChangeText={this.handleChange} placeholder="Deck title" />
          </Item>
          <Button
            style={{ marginTop: 12 }}
            onPress={this.handleSubmit}
            primary
            block
          >
            <Text>Create Deck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
