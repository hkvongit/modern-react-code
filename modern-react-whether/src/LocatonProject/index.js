import React from 'react'
import SeasonDisplay from "./SeasonDisplay"

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
            lattitude:"Berlin",
        }
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({
                lattitude:position.coords.latitude 
            }),
            (err)=>console.log(err)
        )
    }    
    render(){
        return (
        <div>
            <h2>Location  :   {this.state.lattitude}</h2>
            <SeasonDisplay lat={this.state.lattitude}/>
        </div>
        )
        }
}