import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { getDecks } from "../helpers/storage";
import DeckList from "./DeckList";

export default class DeckListScreen extends React.Component {
  state = {
    data: {}
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Deck List",
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => navigation.state.params.handleAddDeck()}
        >
          <Entypo name="plus" size={32} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleAddDeck: this.handleAddDeck });
    this.updateDecks();
  }

  handleAddDeck = () => {
    const { navigation } = this.props;
    navigation.navigate("AddDeckScreen", { updateDecks: this.updateDecks });
  };

  updateDecks = () => {
    getDecks().then(decks => {
      this.setState({
        data: decks
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DeckList data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
