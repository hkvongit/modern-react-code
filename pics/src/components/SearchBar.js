

import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            term:''
        }
    }
    onInputSubmit=(event)=>{
        event.preventDefault()
        this.props.callback(this.state.term)
    }
    render() {
        return (
          <div className="ui segment">
              <form className="ui form" onSubmit={this.onInputSubmit} >
                  <label>Search</label>
                  <input 
                      type="text"
                      value={this.state.term}
                      onChange={(event)=>{this.setState({term: event.target.value})}}/>
                    <button type="submit">Search</button>
              </form>
          </div>
        )
    }
}
