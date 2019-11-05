import React from "react";
import axios from "../config/axios";
import NoteForm from './form'
 export default class NoteNew extends React.Component {
  constructor() {
    super();
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
  }
  handleNoteSubmit(note) {
    console.log(note);
    axios
      .post("/notes", note, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response, "response");
        // if(response.data.hasOwnProperty('errors')) or
        if (response.data.errors) {
          window.alert(response.data.message);
        } else {
          this.props.history.push(`/notes`);
        }
      });
  }

  render() {
    return (
      <div>
        {/* <h2>Add Note</h2> */}
        <NoteForm handleNoteSubmit={this.handleNoteSubmit} />
      </div>
    );
  }
}
