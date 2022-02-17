import React, { Component } from 'react';
import Book from './Book.js';

class BookDisplay extends Component {
    constructor() {
        super();
        this.state = {
            titles: ['Cloud Atlas', 'The God of Small Things', 'Midnight\'s Children', 'The Song of Achilles'],
            authors: ['David Mitchell', 'Arundhati Roy', 'Salman Rushdie', 'Madeline Miller'] 
        }
    }

    render() {
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