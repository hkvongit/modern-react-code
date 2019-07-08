import React from 'react'
import { connect } from "react-redux"

class SongList extends React.Component{
    renderList=()=>{
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            SELECT
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render(){
        console.log(this.props)
        return (
            <div className="ui divided list">
                SongList<br/>
                {this.renderList()}
            </div>
        )
        }
}
// --configuring connectwith MapStateToProps function, ------it takes all of our state data from he store and pass it as props to the SongList component-----the name of this function canbe anything but the code must be correct and it should be passed through the connect() wriiten below 
const mapStateToProps=(state)=>{
    // console.log(state.songs)
    return {songs:state.songs}
}

export default connect(mapStateToProps)(SongList)
// HOW THE connect()(SongList) SYNTAX WORKS ?

// LET US CONSIDER AN EXAMPLE:

    // function connect(){
    //     return function(){
    //         return 'hi there'
    //     }
    // }
// if we are calling the connect function as shown below it will not cal the inner return function

    // connect()-------no output

// so inorder to connect the inner return function we must use as below

    // connect()()-------O/P--- hi there