import {createStore} from 'redux'

const initialState ={
    house:[],
    name:"",
    address: "",
    city:"",
    states:"",
    zip:""
}

export const ADD_NAME ="ADD_NAME"
export const ADD_ADDRESS ="ADD_ADDRESS"
export const ADD_CITY ="ADD_CITY"
export const ADD_STATE ="ADD_STATE"
export const ADD_ZIP ="ADD_ZIP"
export const ADD_HOUSE="ADD_HOUSE" 

function reducer (state = initialState,action){
    const {type,payload}=action 
    switch(type){
        case ADD_NAME:
            const newName =[...state.name,payload]
            return {...state,name:newName}
        case ADD_ADDRESS:
            const newAddress =[...state.address,payload]
            return{...state,address:newAddress}
        case ADD_CITY:
            const newCity =[...state.city,payload]
            return{...state,city:newCity}
        case ADD_STATE:
            const newState =[...state.states,payload]
            return{...state,states:newState}
        case ADD_ZIP:
            const newZip=[...state.zip,payload]
            return{...state,zip:newZip}
        case ADD_HOUSE:
            const{name,address,city,states,zip}=state;
            const house ={name,address,city,states,zip}
            const newHouse =[...state,house,house]
            return{...state,house:newHouse}
        default:
            return state;
    }
}
export default createStore(reducer)