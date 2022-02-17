import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);    
    }
    render(){
        return (
            <div>
                <h1>{this.props.title} by {this.props.author}</h1>
            </div>
        )
    }
}

export default Book