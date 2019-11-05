import axios from '../config/axios'
export const setUser=(user)=>{
    return {
        type: 'SET_USER',
        payload:user
    }
}
 export const removeUser=()=>{
  return {type: 'REMOVE_USER'}
}

export const startSetUser=(formData)=>{
    return (dispatch)=>{
        axios.post('/user/login',formData)
            .then((response)=>{
               // console.log(response.data)
                //const user=response.data
                // console.log(response.data.token)  / return token info from server
                // console.log(response.data.user)  return user info fro server  whch we currently dont have hence we user the bellow method
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.errors)
                }else{
                    localStorage.setItem('authToken',response.data.token)
                   // console.log(response.data.token)
                    dispatch(setUser(response.data))  // we are creating a dummy variable to check 
                }
            })
    }
}
