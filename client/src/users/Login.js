import React from 'react'
import { startSetUser } from  '../actions/users'
import { connect } from 'react-redux'
import { Button, Form, Label } from 'reactstrap'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
           
            email:'',
            password:''
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
           
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        this.props.dispatch(startSetUser(formData))
        this.props.history.push("/notes")
    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <Form onSubmit={this.handleSubmit}>
                   <Label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </Label><br/>
                    <Label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </Label><br/>
                    <Button color="success">Login</Button>
                </Form>

            </div>
        )
    }
}
export default connect()(Login)