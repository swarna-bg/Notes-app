  


import React from "react";
import axios from "../config/axios";
import { Link } from "react-router-dom";

export default class NoteShow extends React.Component {
  constructor() {
    super();
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const note = response.data;
        this.setState({ note });
        console.log(note);
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.note.title} - {this.state.note.description}
        </h2>
        <Link to={`/notes/edit/${this.state.note._id}`}>Edit</Link>
      </div>
    );
  }
}