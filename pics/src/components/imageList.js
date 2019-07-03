import React from 'react'
import './imageList.css'
import ImageCard from "./imageCard"


export default function imageList(props) {
    console.log(props.photos) 
    const photosrc= props.photos.map((photo)=>{
        return (
            <ImageCard key={photo.id} image={photo}/>
        )
    })
    return (
        <div className="image-list">
            {photosrc}
        </div>
    )
}
