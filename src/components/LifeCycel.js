import React, { Component } from 'react';
import axios from "axios";
export default class LifeCycle extends Component {
    state = {
        isLogged : true
      
    }
    // constructor(props) {
    //     super(props)
    //     // this.state = {  }
    // }
    componentDidMount(){
        //console.log("component did mount")
        axios("http://dummy.restapiexample.com/api/v1/employees",{
            method :"GET"
        }).then((result)=>{console.log(result)})
       
        console.log("constructoer")
        setTimeout(()=>{
            this.setState({
                isLogged : false
            })

        },3000)
    }
    componentDidUpdate(){
    console.log("Component Did Update : "+this.state.value)
    }
    Change=()=>{
        this.setState({
            value :!this.state.value
        })
    }
    // componentWillMount(){
    //     console.log("component will mount")
    // }
    render() { 
        return(
            <div>
        {/* <button onClick={this.Change}>Change</button> */}
        {
            this.state.isLogged===true ? <h1>Loading</h1> : 
            <h1>Data Loaded sucessfully</h1>

        }
            </div>   
        )
    }
}
 
