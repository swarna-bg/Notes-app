import React from "react";
import axios from "../config/axios";
import NoteForm from './form'
 export default class CategoryNew extends React.Component {
  constructor() {
    super();
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
  }
  handleCategorySubmit(category) {
    console.log(category);
    axios
      .post("/categories", category, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        console.log(response, "response");
        // if(response.data.hasOwnProperty('errors')) or
        if (response.data.errors) {
          window.alert(response.data.message);
        } else {
          this.props.history.push(`/categories`);
        }
      });
  }

  render() {
    return (
      <div>
        {/* <h2>Add Note</h2> */}
        <NoteForm handleCategorySubmit={this.handleCategorySubmit} />
      </div>
    );
  }
}