import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { data } from "../helpers/storage";
import DeckList from "./DeckList";

export default class DeckListScreen extends React.Component {
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
  }

  handleAddDeck = () => {
    console.log("Move to add detail");
  };

  render() {
    return (
      <View style={styles.container}>
        <DeckList data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
