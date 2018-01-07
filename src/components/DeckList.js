import React from "react";
import { RefreshControl, StyleSheet, Text, View, FlatList } from "react-native";

import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={{ height: "100%" }}
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
