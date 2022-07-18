import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;

const initialState = [
  {
    id: `list-${0}`,
    title: "Last Episode",
    cards: [
      {
        id: `card-${0}`,
        text: "we created a static list and a static card",
      },
      {
        id: `card-${1}`,
        text: "we used a mix between material UI React and styled components",
      },
    ],
  },
  {
    id: `list-${1}`,
    title: "This Episode",
    cards: [
      {
        id: `card-${2}`,
        text: "we will create our first reducer",
      },
      {
        id: `card-${3}`,
        text: "and render many cards on our list with static data",
      },
      {
        id: `card-${4}`,
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
        id: `list-${listID}`,
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
        id: `list-${cardID}`,
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

    // drag drop logic ----------------------------------------------------------------------------------->
    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = [...state];

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const destinationList = [...state].find((list) => droppableIdStart === list.id);
        const card = destinationList.cards.splice(droppableIndexStart, 1); //2 arguments to grab
        destinationList.cards.splice(droppableIndexEnd, 0, ...card); //3 arguments to insert
      }

      // in the other list
      if(droppableIdStart !== droppableIdEnd) {
        // find the list where drag started
        const listStart = [...state].find((list) => droppableIdStart === list.id);
        // pull out the card from this list
        const targetCard = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where drag ended
        const listEnd = [...state].find((list) => droppableIdEnd === list.id);
        // put the card into this list
        listEnd.cards.splice(droppableIndexEnd, 0, ...targetCard);
      }

      return newState;
    }

    // simple render ------------------------------------------------------------------------------------->
    default:
      return state;
  }
};

export default ListsReducer;
