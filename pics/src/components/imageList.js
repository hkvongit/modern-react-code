import React from 'react'

export default function ImageList(props) {
    const photos=props.photos
    console.log(photos)
    const photosrc= photos.map(photo=>{
        return (
            <div key={photo.id}>
                <img src={photo.urls.small} alt={photo.urls.small}/>
                <br/>
            </div>)})
    console.log(photosrc)
    return (
        <div>
            Imagesss
            {photosrc}
        </div>
    )
}
