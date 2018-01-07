import React from "react";
import { RefreshControl, StyleSheet, Text, View, FlatList } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        {Object.values(data).length > 0 ? (
          <FlatList
            style={{ height: "100%", padding: 12 }}
            data={Object.values(data)}
            keyExtractor={item => item.title}
            renderItem={({ item }) => <DeckItem deck={item} />}
          />
        ) : (
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <SimpleLineIcons
              style={{ marginBottom: 12 }}
              name="emotsmile"
              size={45}
            />
            <Text>Please create new Deck to get started!</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
