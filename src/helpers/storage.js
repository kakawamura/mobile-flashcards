import { AsyncStorage } from "react-native";

const KEY = "MOBILE_FLASH_CARD_STORAGE_KEY";

export const getDecks = () => {
  return AsyncStorage.getItem(KEY).then(res => {
    if (res === null) {
      return {};
    }
    return JSON.parse(res);
  });
};

export const getDeck = title => {
  return getDecks().then(decks => {
    return decks[title];
  });
};

export const saveDeckTitle = title => {
  const data = {
    title: title,
    questions: []
  };

  return AsyncStorage.mergeItem(
    KEY,
    JSON.stringify({
      [title]: data
    })
  );
};

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {
  return getDecks().then(decks => {
    decks[title].questions.push(card);
    AsyncStorage.setItem(KEY, JSON.stringify(decks));
  });
};
