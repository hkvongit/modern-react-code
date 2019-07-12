import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from '../actions/'
import UserHeader from "./UserHeader"

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts() // calling the action-creator named "fetchPosts"
    }
    renderList=()=>{
        return this.props.posts.map(post => {
            return (
              <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                  <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                  <UserHeader userId ={post.userId}/>
                </div>
              </div>
            );
          });
        }
      
    render() {
        console.log(this.props.posts )
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}
//mapping states of the redux store to props of the main component function
const mapStateToProps=(state)=>{
    return {posts:state.posts}
}

//=======EXPORTING EVERYTHING SUCH AS ACTION CALL UNDER componentDidMount() AND mapStateToProps ALONG WITH THE THE WHOLE COMPONENT --PostList TO OUR ==STORE== USING =====connect()===
export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostList)

// The connect() function connects a React component to a Redux store.