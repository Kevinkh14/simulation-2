import React,{Component} from 'react'
import store,{ADD_HOUSE} from '../../store'
import axios from 'axios'

export default class House extends Component{
    constructor(){
        super()
        const reduxState = store.getState()
        this.state={
            house:reduxState.house
        }
    }
  

    render(){
        return(
            <div className = 'House'>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        )
    }
}