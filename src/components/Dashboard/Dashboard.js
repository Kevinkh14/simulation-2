import React,{Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import './dash.css'
import Wizard from '../Wizard/Wizard'
import axios from 'axios'


export default class Dashboard extends Component{
constructor(){
    super()
    this.state={
        list:[]
    }
}
componentDidMount(){
    axios
    .get("/api/housing")
    .then(response =>{
        this.setState({house:response.data})
    })
}

    render(){
        return(
            <div className = 'dash'>
                <div className = 'dashSub'>
                    <h2 className="dashHead">Dashboard</h2>
                    <Link to = '/wizard'>
                        <button className ='dashButton'>Add New Property</button>
                    </Link>
                </div>
                <div className ='dashContainer'>
                    {this.state.list.map((list,index)=>(
                        <Wizard thing ={list.houses} key ={index}/>
                    ))}
                </div>
                <div>
                    <House/>
                </div>
            </div>
        )
    }
}