import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchUser} from "../actions"

class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const user = this.props.user.find((user)=> user.id===this.props.userId)
        // find() is a built in javascript method ,we can call it with a function, it just works like map or filter , once the find fuction finds the correct element (here it is the user with the exact user id) the fuction will stop at the exact point
        if(!user){
            return <div>Loading....</div>
        }
        return (
            <div className="header">
                User header :{user.name}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {user:state.user}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)