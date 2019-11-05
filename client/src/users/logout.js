import React from 'react'
import { connect } from 'react-redux'
import axios from '../config/axios'
import { removeUser } from '../actions/users'

class Logout  extends React.Component{
    componentDidMount(){
        axios.delete('/user/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            console.log(response.data)
            localStorage.clear('authToken')
            this.props.dispatch(removeUser())
           this.props.history.push("/user/login")
        })
    }

    render(){
        return(
            <div>
                <h2>{this.props.user.username} is logging out....</h2>
            </div>
        )

    }
}
 const mapStateToProps=state=>{
     return{
         user:state.user
     }
     
 }
  export default connect(mapStateToProps)(Logout)
 
