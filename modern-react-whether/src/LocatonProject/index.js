import React from 'react'
import SeasonDisplay from "./SeasonDisplay"
import "./SeasonDisplay.css"
import Loader from "./loader"

// const LocationPage=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (err)=>console.log(err)
//     )
//     return(
//         <div>
//             <SeasonDisplay/>
//         </div>
//     )
// }

export default class LocationPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lattitude:null,
            error_message:null,
        }
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({
                lattitude:position.coords.latitude 
            }),
            (err)=>
            
            this.setState({
                error_message:err.message
            }),
        )
    }    
    render(){
        if (this.state.error_message && !this.state.lattitude){
            return(<div>Error : {this.state.error_message} </div>)
        }
        if (!this.state.error_message && this.state.lattitude){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lattitude}/>
                </div>
            )
        }
        else{
            return(<Loader message="Please allow the permission to get your location above"/>)
        }
        }
}