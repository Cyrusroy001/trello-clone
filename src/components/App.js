import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

import TrelloList from "./TrelloList/TrelloList";
import TrelloActionButton from "./TrelloActionButton/TrelloActionButton";
import BoardTitle from "./BoardTitle/BoardTitle";
import NotificationBar from "./NotificationBar/NotificationBar";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEndHandler = (result) => {
    // TODO: reordering logic
    // create a redux action and handle logic in reducer
    const { destination, source, draggableID } = result;

    // drop outside droppable, destination = null
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEndHandler}>
        <div className="App">
          <Header />
          <SideBar />
          <NotificationBar />
          <BoardTitle />
          <div style={{marginLeft: "40px"}}>
            <ListContainer>
              {lists.map((list) => (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              ))}
              <TrelloActionButton list />
            </ListContainer>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: [...state.lists],
});

export default connect(mapStateToProps)(App);
