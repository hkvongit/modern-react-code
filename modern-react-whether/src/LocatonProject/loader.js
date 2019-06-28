import React from 'react'

export default function Loader(props) {
    return (
                <div>
                    <div className="season-display">
                        <div className="ui active inverted dimmer">
                            <div className="ui text loader"> {props.message} </div>
                        </div>
                    </div>
                </div>
    )
}
Loader.defaultProps={
    message:"Loading ...."
}
