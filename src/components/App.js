import React, { Component } from "react";
import { connect } from "react-redux";

import TrelloList from "./TrelloList/TrelloList";
import TrelloActionButton from "./TrelloActionButton/TrelloActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Trello-Clone</h2>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
