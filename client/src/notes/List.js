

import React from "react";
import axios from "../config/axios";
import { Link } from "react-router-dom";
import { Table,Button,Badge} from 'reactstrap'

export default class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get("/notes", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data, "data");
        this.setState({ notes: response.data }, () => {
          console.log(this.state.notes);
        });
      })
      .catch(err => {
        window.alert(err);
      });
  }

  handleRemove = id => {
    axios
      .delete(`/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState(prev => {
          return {
            notes: prev.notes.filter(notes => notes._id !== id)
          };
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Notes -{this.state.notes.length} </h3>
        <Table striped>
          <thead>
            <tr>
              <th>Title</th>
              {/* <th>Category</th> */}
              <th>Show</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.notes.map(note => (
              <tr key={note._id}>
                <td>{note.title}</td>
                {/* <td>{note.categoryId.name}</td> */}
                <td>
                  <Link to={`/notes/${note._id}`}> show</Link>
                </td>
                <td>
                  <Button color="danger"
                onClick={() => this.handleRemove(note._id)}
                  >Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Badge color="light" href="/notes/new">Add Note</Badge>
      </div>
    );
  }
}