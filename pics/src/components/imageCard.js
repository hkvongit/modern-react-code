import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props){
        super(props)
        this.state={no_of_spans:0}
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan)
    }
    setSpan=()=>{
    const height=this.imageRef.current.clientHeight
    const no_of_spans=Math.ceil(height/10)
    this.setState({no_of_spans:no_of_spans})
    }

    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.no_of_spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>
        )
    }
}
