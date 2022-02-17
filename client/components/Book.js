import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: 'uri',
        }   
    }

    //try to do a fetch request to an API here
    //render the cover photo for the book inside the render()
    componentDidMount(){
        const searchText = this.props.title.toLowerCase().split(' ').join('+');
        console.log('searchText:', searchText);
        const url = `http://openlibrary.org/search.json?q=${searchText}`
        console.log('book url', this.props.title, url)
        fetch(url, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            const isbn = data.docs[0].isbn[0];
            const imgurl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
            console.log(this.props.title, imgurl)
            return this.setState({
                cover: imgurl,
            })
        })
        // .then(res => res.json())
        // .then(image => {
        //     return this.setState({
        //         cover: image,
        //     })
        // })
        // .catch(err => {
        //     console.error('Image fetch request failed', err)
        // })
    }

    render(){
        return (
            <div>
                <h1>{this.props.title} by {this.props.author}</h1>
                <img src={this.state.cover} alt='no image available'/>
            </div>
        )
    }
}

export default Book