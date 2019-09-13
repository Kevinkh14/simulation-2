import React,{Component} from 'react'
import './wizard.css'
import {Link} from 'react-router-dom'

export default class Wizard extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            address: "",
            city:"",
            zip:""
        }
        this.handleInput =this.handleInput.bind(this)
    }

    handleInput(e){
        this.setState({name:e.target.value})
        this.setState({address:e.target.value})
        this.setState({city:e.target.value})
        this.setState({zip:e.target.value})
        
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
                        <input onChange ={this.handleInput}/>
                    </div>
                    <div className ='inputBox'>
                        <p>Address</p>
                        <input></input>
                    </div>
                    <div className ='inputBox'>
                        <p>City</p>
                        <input></input>
                        <p>State</p>
                        <input></input>
                        <p>zip</p>
                        <input type ="number"></input>
                    </div>
                </div>
                <button>Complete</button>
            </div>
        )
    }
}