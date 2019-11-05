import React from 'react'

import axios from "../config/axios";


 export default class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //   title:this.props.note.title ? this.props.note.title:'',
            //  description:this.props.note.description ? this.props.note.description:'',
            
            title:' ',
            description:'',
            categories:[],
            category:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        axios.get("/categories", {
            headers: {
              "x-auth": localStorage.getItem("token")
            }
          })
          .then(response => {
            console.log(response.data, "data");
            this.setState({ categories: response.data }, () => {
              console.log(this.state.categories);
            });
          })
          .catch(err => {
            window.alert(err);
          });
        
    }

    handleChange(e){
       this.setState({
            [e.target.name]:e.target.value
       })
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            category:this.state.category
        }
        console.log(formData)
        this.props.note && (formData.id=this.props.note._id)
          this.props.handleNoteSubmit(formData)
    }
    componentWillReceiveProps(nextProps){
       this.setState({
           title:nextProps.note.title,
           description:nextProps.note.description
       })
      }

    render(){
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label >
                        title
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                    </label><br/>
                    <label>
                        description
                        <input type="text" value={this.state.description} onChange={this.handleChange} name="description"/>
                    </label><br/>
                    Category
                      <select value={this.state.category} onChange={this.handleChange} name="category">
                          <option value=''>select</option>
                          {this.state.categories.map(cate=>{
                              return <option key={cate._id} value={cate._id}>{cate.name}</option>
                          })}
                      </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}




