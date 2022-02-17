import React, { Component } from 'react';
import Book from './Book.js';


class BookDisplay extends Component {
    constructor() {
        super();
        this.state = {
            // titles: ['Cloud Atlas', 'The God of Small Things', 'Midnight\'s Children', 'The Song of Achilles'],
            titles: [],
            authors: []
            // authors: ['David Mitchell', 'Arundhati Roy', 'Salman Rushdie', 'Madeline Miller'] 
        }
    }

    //COMPONENTDIDMOUNT
    componentDidMount(){
        fetch('http://localhost:3000/books/', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('titles data:', data);
            if (!Array.isArray(data)) titles = [];
            return this.setState({
                titles: data,
            });
        })
        .catch(err => console.log('BookDisplay.componentDidMount: get characters: ERROR: ', err));
        fetch('http://localhost:3000/authors', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('author data: ', data);
            if (!Array.isArray(data)) authors = [];
            return this.setState({
                authors: data,
            })
        })
        .catch(err => console.log('BookDisplay.componentDidMount: get characters: ERROR: ', err));
    }
    //do some sort of fetch request to my database to populate titles
    //fetch request to populate authors
    //iterate thru and render books based on that

    render() {
        console.log(this.state.titles);
        const allBooks = []
        for (let i =0; i < this.state.titles.length; i++) {
            allBooks.push(<Book title={this.state.titles[i]} author={this.state.authors[i]}/>);
        }
        return (
            <div>
                {allBooks}
            </div>
        )
    }
}

export default BookDisplay;