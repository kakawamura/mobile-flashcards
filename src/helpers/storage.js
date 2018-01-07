// TODO: It is a test Data, delete it
export const data = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

// getDecks: return all of the decks along with their titles, questions, and answers.
export const getDecks = () => {};

//saveDeckTitle: take in a single title argument and add it to the decks.
export const getDeck = id => {};

// getDeck: take in a single id argument and return the deck associated with that id.
export const saveDeckTitle = tite => {};

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const baddCardToDeck = (title, card) => {};
