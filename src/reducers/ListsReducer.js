import { CONSTANTS } from "../actions";

let listID = 4;
let cardID = 8;

const initialState = [
  {
    id: `list-${0}`,
    title: "To Do",
    cards: [
      {
        id: `card-${0}`,
        text: "Helpdesk Call AA999",
      },
      {
        id: `card-${1}`,
        text: "Helpdesk Call BB999",
      },
    ],
  },
  {
    id: `list-${1}`,
    title: "Development",
    cards: [
      {
        id: `card-${2}`,
        text: "Helpdesk Call CC999",
      },
      {
        id: `card-${3}`,
        text: "Helpdesk Call DD999",
      },
      {
        id: `card-${4}`,
        text: "Helpdesk Call EE999",
      },
    ],
  },
  {
    id: `list-${2}`,
    title: "Testing",
    cards: [
      {
        id: `card-${5}`,
        text: "Helpdesk Call FF999",
      },
      {
        id: `card-${6}`,
        text: "Helpdesk Call GG999",
      },
    ],
  },
  {
    id: `list-${3}`,
    title: "Done",
    cards: [
      {
        id: `card-${7}`,
        text: "Helpdesk Call HH999",
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
