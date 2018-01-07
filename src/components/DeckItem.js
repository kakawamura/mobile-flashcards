import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

class DeckItem extends React.Component {
  handleOnPress = () => {
    const { navigation, deck } = this.props;
    navigation.navigate("DeckDetailScreen", { deck });
    console.log("nice");
    // Move to other screen
  };
  render() {
    const { deck } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleOnPress}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(DeckItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
