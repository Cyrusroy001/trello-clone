import React from "react";
import { Card, Icon, Button } from "@mui/material";
import TextArea from "react-textarea-autosize"; // not needed
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";

// make this a class cause it has some state
class TrelloActionButton extends React.Component {
  // a piece of state --------------------------------------------------------------------------------------------------------->
  state = {
    formOpen: false,
    text: "",
  };

  // different event handlers ------------------------------------------------------------------------------------------------->
  openFormHandler = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeFormHandler = () => {
    this.setState({
      formOpen: false,
    });
  };

  inputChangeHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addListHandler = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addList(text));
      this.setState({
        text: "",
      });
    }
    this.closeFormHandler();
    return;
  };

  addCardHandler = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listID, text));
      this.setState({
        text: "",
      });
    }
    this.closeFormHandler();
    return;
  };

  // Render Components -------------------------------------------------------------------------------------------------------->
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add a card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openFormHandler}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeHolder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add list" : "Add card";

    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            padding: "8px 12px",
            marginBottom: "8px",
            border: "2px solid #0179be",
            borderRadius: "3px",
          }}
        >
          <TextArea
            placeholder={placeHolder}
            autoFocus
            value={this.state.text}
            onChange={this.inputChangeHandler}
            style={{
              resize: "none",
              width: "100%",
              border: "none",
              outline: "none",
            }}
          />
        </Card>

        <div style={styles.formButtonGroup}>
          <Button
            onClick={list ? this.addListHandler : this.addCardHandler}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#0179be",
            }}
          >
            {buttonTitle}{" "}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer",
            }}
            onClick={this.closeFormHandler}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };

  // Render the main thingy --------------------------------------------------------------------------------------------------->
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
};

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },

    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
};

export default connect () (TrelloActionButton);