import React from 'react'
import { Button, Form, Label,FormGroup } from 'reactstrap'
import axios from '../config/axios'


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            userPassword:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post(`/user/register`,formData)
            .then(response=>{
                console.log(response.data)
            if(response.data.errors){
                alert(response.data.message)
            }else{
                this.props.history.push('/user/login')
            }
    })
    
    }

    render(){
        return(
            <div>
                <h3>Register</h3>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">   Username</Label>
                      
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" id="name"/>
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="email"> Email</Label>
                       
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email"/>
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="pass"> Password</Label>
                       
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="pass"/>
                    <br/>
                </FormGroup>
                   
                <Button color="success"> Submit</Button>
                   
                </Form>

            </div>
        )
    }
}
export default Register