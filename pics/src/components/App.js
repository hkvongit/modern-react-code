import React from 'react';
import unsplash from '../api/unsplash'
import './App.css';
import SearchBar from "./SearchBar"
import ImageList from "./imageList"

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      images:[]
    }
  }

  handleSubmit= async (searchText)=>{
    const response = await unsplash.get('/search/photos',{
      params:{query: searchText},
    })
    console.log(this)
    this.setState({
      images:response.data.results
    })

  }
  render(){
    return (
      <div className="ui container" style={{ marginTop:'10px' }}>
        <SearchBar callback={this.handleSubmit}/>
        {this.state.images.length}
        <ImageList photos={this.state.images}/>
      </div>
    );
  }
}