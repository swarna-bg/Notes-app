import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import axios from './config/axios'
import { setUser } from './actions/users'
import 'bootstrap/dist/css/bootstrap.min.css';


const store=configureStore()

  //initial store value

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//handle page reload

if(localStorage.getItem('authToken')){
  axios.get('user/account',{
    headers:{
      'x-auth':localStorage.getItem('authToken')
    }
  })
  .then((response)=>{
    const user=response.data
    store.dispatch(setUser(user))
  })
}

const ele=(
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

