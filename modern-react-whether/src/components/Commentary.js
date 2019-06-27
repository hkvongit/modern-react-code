import React from 'react'

export default function Commentary(props) {
    return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt={props.name}/>
                    </a>
                    <div className="content">
                        <a href='/' className="author">
                            {props.name}
                        </a>
                        <div className="metaata">
                            <span className="date">{props.time}</span> 
                        </div>
                        <div className="text">{props.comment}</div>
                    </div> 
                    
                </div>
            </div>
    )
}
