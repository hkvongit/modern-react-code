import { combineReducers } from "redux"  

// --------------- song reducer -------------

const songsReducer=()=>{
    return[
        {title: "Hooked on a Feeling", duration:'2:52'},
        {title:	"Go All the Way", duration:'3:21'},
        {title:	"Spirit in the Sky", duration:'4:02'},
        {title:	"Moonage Daydream", duration:"4:41"}
    ]
}

// -----------selected song reducer------------

const selectedSongReducer=(selectedSong=null,action)=>{
    if (action.type==="SONG_SELECTED"){
        return action.payload;
    }else{
        return selectedSong
    }
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})