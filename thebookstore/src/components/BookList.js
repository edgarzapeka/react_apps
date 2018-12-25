import React, { useState, useEffect } from 'react';
import { fetchBooks } from './../api';

import Book from './Book';

import { Row } from 'reactstrap';

const BookList = props => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        if (books.length === 0){
            fetchBooks()
                .then(response => response.json())
                .then(data => setBooks(data))
        }
    })

    return (
        <Row>
            {books.map(b => <Book key={b._id} book={b}/>)}
        </Row>
    );
};

export default BookList;