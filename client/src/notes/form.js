import React from 'react'
import {Form,FormGroup,Label,Button} from 'reactstrap'

import axios from "../config/axios";


 export default class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.note? props.note.title : '',
            description:props.note ? props.note.description :'',
            category:props.note ? props.note.category : '',
            // title:' ',
            // description:'',
            categories:[],
            // category:''
           
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        axios.get("/categories", {
            headers: {
              "x-auth": localStorage.getItem("authToken")
            }
          })
          .then(response => {
            //console.log(response.data, "data");
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


    

    render(){
        return (
            <div>
                
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label for="title" >  Title</Label>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title" id="title"/>
                    <br/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="des"> Description</Label>
                       
                        <input type="text" value={this.state.description} onChange={this.handleChange} name="description" id="des"/>
                    <br/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="category">Category</Label>
                      <select value={this.state.category} onChange={this.handleChange} name="category" id="category">
                          <option value=''>select</option>
                          {this.state.categories.map(cate=>{
                              return <option key={cate._id} value={cate._id}>{cate.name}</option>
                          })}
                      </select>
                      </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </div>
        )
    }
}




