import React from 'react'
import { Button, Form, Label } from 'reactstrap'
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
    // const  userPassword = this.state.userPassword;
    // if (formData.password === userPassword) {
    //   axios.post('/user/register', formData,{
    //         headers: {
    //           "x-auth": localStorage.getItem("authToken")
    //         }

    //   })
    //     .then(response => {
    //       if (response.data.errors) {
    //         window.alert(response.data.message);
    //         console.log("validation error", response.data.errors);
    //       } else {
    //         console.log("Success", response.data);
    //         this.props.history.push("/user/login")
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // } 
    }

    render(){
        return(
            <div>
                <h3>Register</h3>
                <Form onSubmit={this.handleSubmit}>
                   
                    <Label>
                        Username
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
                    </Label><br/>
                    <Label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </Label><br/>
                    <Label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </Label><br/>
                    {/* <input type="submit" value="submit"/> */}
                    <Button color="success"> Submit</Button>
                   
                </Form>

            </div>
        )
    }
}
export default Register