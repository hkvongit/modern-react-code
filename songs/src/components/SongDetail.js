import React from 'react'
import { connect } from 'react-redux'

const SongDetail=(props)=>{
    // console.log(props)
        if(props.song===null){
            return<div></div>
        }
        else{
            return(
            <div>
                <h2>Song Details :</h2>
                <p>
                    Title : {props.song.title}<br/>
                    Duration: {props.song.duration}
                </p>
            </div>
            )
        }
}

// passing the store selectedSong state as a prop to the 'Songdetail' component function
const mapStateToProp=(state)=>{
   return ({song: state.selectedSong})
}

export default connect(mapStateToProp)(SongDetail)
// we need to wrap the SongDetail into the connect the 'connect' Component so that we can get some information from the redux store
