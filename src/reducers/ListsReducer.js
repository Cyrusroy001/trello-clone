import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;

const initialState = [
  {
    id: 0,
    title: "Last Episode",
    cards: [
      {
        id: 0,
        text: "we created a static list and a static card",
      },
      {
        id: 1,
        text: "we used a mix between material UI React and styled components",
      },
    ],
  },
  {
    id: 1,
    title: "This Episode",
    cards: [
      {
        id: 0,
        text: "we will create our first reducer",
      },
      {
        id: 1,
        text: "and render many cards on our list with static data",
      },
      {
        id: 2,
        text: "link tags for roboto font and material icons",
      },
    ],
  },
];

const ListsReducer = (state = initialState, action) => {

    switch (action.type) {
      
      // add a new list ----------------------------------------------------------------------------------->
      case CONSTANTS.ADD_LIST: {
        const newList = {
          id: listID,
          title: action.payload,
          cards: [],
        };
        listID += 1;
        state.push(newList);
        return [...state];
      }

      // add a new card ----------------------------------------------------------------------------------->
      case CONSTANTS.ADD_CARD: {
        const newCard = {
          id: cardID,
          text: action.payload.text,
        };
        cardID += 1;
        const newState = state.map((list) => {
          console.log("target list found");
          if (list.id === action.payload.listID) {
            list.cards.push(newCard);
            return list;
          } else {
            return list;
          }
        });
        return [...newState];
      }

      // simple render ------------------------------------------------------------------------------------->
      default:
        return state;
    }
};

export default ListsReducer;