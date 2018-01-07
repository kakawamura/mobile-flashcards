import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

import { withNavigation } from "react-navigation";

class DeckItem extends React.Component {
  handleOnPress = () => {
    const { navigation, deck } = this.props;
    navigation.navigate("DeckDetailScreen", { title: deck.title });
  };
  render() {
    const { deck } = this.props;
    return (
      <Card>
        <CardItem button onPress={this.handleOnPress}>
          <Body>
            <Text>{deck.title}</Text>
            <Text note>{deck.questions.length} cards</Text>
          </Body>
        </CardItem>
      </Card>
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
