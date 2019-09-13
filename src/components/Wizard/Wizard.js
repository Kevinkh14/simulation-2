import React,{Component} from 'react'
import './wizard.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store,{ADD_NAME,ADD_ADDRESS,ADD_CITY,ADD_STATE,ADD_ZIP} from "../../store"

export default class Wizard extends Component{
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state={
            name:reduxState.name,
            address: reduxState.address,
            city:reduxState.city,
            states:reduxState.states,
            zip:reduxState.zip,

            input:[]
        }
        
    }

    handleInputName(nameVal){
        this.setState({name:nameVal})
    }
    handleInputAddress(adVal){
        this.setState({address:adVal})
    }
    handleInputCity(cityVal){
        this.setState({city:cityVal})
    }
    handleInputState(stateVal){
        this.setState({states:stateVal})
    }
    handleInputZip(zipVal){
        this.setState({zip:zipVal})
    }
//setup properly
    handleComplete(){
        store.dispatch({
            type: ADD_NAME,
            payload:this.state.input
        })
        store.dispatch({
            type:ADD_ADDRESS,
            payload:this.state.input
        })
        store.dispatch({
            type:ADD_CITY,
            payload:this.state.input
        })
        store.dispatch({
            type:ADD_STATE,
            payload:this.state.input
        })
        store.dispatch({
            type:ADD_ZIP,
            payload:this.state.input
        })
        this.setState({
            input:[]
        })
        axios.post("/api/housing",{
            houses:this.state.input,
        })
        .then(response=>{
            this.setState({input :response.data})
        })
        .catch(err=>{this.setState({err:'error accured'})})
    }
    

    render(){
        return(
            <div className ='wiz'>
                <div className = 'wizSub'>
                    <h2>Add New Listing</h2>
                    <Link to = '/'>
                        <button>Cancel</button>
                    </Link>
                </div>
                <div className ='inputBox'>
                    <div className ='propertyDiv'>
                        <p>Property Name</p>
                        <input onChange ={e=>this.handleInputName(e.target.value)}/>
                    </div>
                    <div className ='inputBox'>
                        <p>Address</p>
                        <input onChange = {e=>this.handleInputAddress(e.target.value)}/>
                    </div>
                    <div className ='inputBox'>
                        <p>City</p>
                        <input onChange ={e=>this.handleInputCity(e.target.value)}/>
                        <p>State</p>
                        <input onChange ={e=>this.handleInputState(e.target.value)}/>
                        <p>zip</p>
                        <input type ="number" onChange ={e=>this.handleInputZip(e.target.value)}/>
                    </div>
                </div>
                <button onClick ={this.handleComplete}>Complete</button>
            </div>
        )
    }
}