import React from "react";
import axios from "../config/axios";
import NoteForm from './form'

export default class NoteEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      note: {}
    };
  }

  handleNoteSubmit = note => {
    //console.log("edit", note);
    axios.put(`/notes/${note.id}`, note, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.data.errors) {
          window.alert(response.data.message);
          console.log("validation error", response.data.errors);
        } else {
          console.log("success", response.data);
          this.props.history.push(`/notes`);
        }
      });
  };

  componentDidMount() {
    //console.log("edit contact component did mount");
    const id = this.props.match.params.id;
    axios
      .get(`notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const note = response.data;
        this.setState({ note });
      });
  }
  render() {
    return (
      <div>
        <h2>Edit Note </h2>

        {Object.keys(this.state.note).length>0 && <NoteForm
          note={this.state.note}
          handleNoteSubmit={this.handleNoteSubmit}
        />}
      </div>
    );
  }
}