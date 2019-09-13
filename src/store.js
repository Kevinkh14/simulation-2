import {createStore} from 'redux'

const initialState ={
    list:[],
    name:"",
    address: "",
    city:"",
    zip:""
}

export const ADD_NAME ="ADD_NAME"
export const ADD_ADDRESS ="ADD_ADDRESS"
export const ADD_CITY ="ADD_CITY"
export const ADD_ZIP ="ADD_ZIP"
export const ADD_HOUSE="ADD_HOUSE" 

function reducer (state = initialState,action){
    const {type,payload}=action 
    switch(type){
        case ADD_NAME:
            return {...state,name:payload}
        case ADD_ADDRESS:
            return{...state,address:payload}
        case ADD_CITY:
            return{...state,city:payload}
    }
}