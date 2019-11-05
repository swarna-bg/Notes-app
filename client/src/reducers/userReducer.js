

const userReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {...action.payload}
        }
        case 'REMOVE_USER':{
            return {}
        }
               
        default:{
            return {...state}  //Object.assign({},statw)
        }
    }
}
export default userReducer