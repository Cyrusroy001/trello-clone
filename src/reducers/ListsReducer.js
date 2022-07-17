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
    switch(action.type) {
        default:
            return state;
    }
};

export default ListsReducer;