import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import { Navbar,Nav, NavItem, NavLink,} from 'reactstrap';
import { connect } from 'react-redux';

import Register from './users/Register'
import  Login from './users/Login'
import Logout from './users/logout'
//import Home from './users/home'

import NotesList from './notes/List'
import NoteNew from './notes/new'
import NoteShow from './notes/show'
import NoteEdit from './notes/edit'


import CategoryList from './categories/List'
import CategoryNew from './categories/new';





function App(props) {
  return (
    <BrowserRouter>
        <div>
          <Navbar color="light" light expand="md">Notes App
          <Nav className="ml-auto" navbar>
         
             
         
            {
              Object.keys(props.user).length === 0 ?(
                
                  <div className="row">
                      <NavItem><NavLink href="/user/register">Register</NavLink></NavItem> 
                      <NavItem><NavLink href="/user/login">Login</NavLink></NavItem>    
                  </div>
               
              ):(
                <div className="row">
                  <NavItem><NavLink href="/user/logout">Logout</NavLink></NavItem> 
                  <NavItem><NavLink href="/notes">Notes</NavLink></NavItem>
                  <NavItem><NavLink href="/categories">Categories</NavLink></NavItem> 
                </div>
              )
            
            }
        
          </Nav> </Navbar>
          </div>
          <Switch>
          <Route path="/notes" component={NotesList} exact={true}/>
          <Route path="/notes/new" component={NoteNew} exact={true}/>
          <Route path="/notes/edit/:id" component={NoteEdit} exact={true}/>
          <Route path="/notes/:id" component={NoteShow} exact={true}/>

          <Route path="/categories" component={CategoryList} exact={true}/> 
          <Route path="/categories/new" component={CategoryNew} exact={true}/>
          
          {/* <Route path="/" component={Home}></Route> */}
          <Route path="/user/register" component={Register} /> 
          <Route path="/user/login" component={Login} /> 
          <Route path="/user/logout" component={Logout} /> 
          </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
