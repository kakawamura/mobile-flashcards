import React from "react";
import {
  Header,
  Container,
  Button,
  Content,
  Item,
  Input,
  Text
} from "native-base";

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
    // Create Deck
    // Go Back to Root
    console.log(title);
    if (title.length == 0) {
      alert("Please insert the title");
    }
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
