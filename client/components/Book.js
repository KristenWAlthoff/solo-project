import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);    
    }

    //try to do a fetch request to an API here
    //render the cover photo for the book inside the render()

    render(){
        return (
            <div>
                <h1>{this.props.title} by {this.props.author}</h1>
            </div>
        )
    }
}

export default Book