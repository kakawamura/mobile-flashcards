import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    const { data } = this.props;
    console.log(Object.values(data));
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(data)}
          renderItem={({ item }) => <DeckItem deck={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
