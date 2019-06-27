import React from 'react'


export default function Cards(props) {
    return (
        <div>
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                    {/* <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/> */}
                    <div class="header">
                        Do you want to approve this comment ?
                    </div>
                        {props.children}
        {/* this props.children help us to view the children props of the Cards object ,
            here the children is the commentary 
            ReactComponent but yoyu can use any other componet like aboutUs component to show it with ease   */}
                  
                </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Decline</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
