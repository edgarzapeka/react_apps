import React, { useState, useEffect } from 'react';
import { fetchBooks } from './../api';

import Book from './Book';
import { book_list_title } from './../styles/componenets/book_list.scss';

import { Col } from 'reactstrap';

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
        <Col md="4">
            <Col md="12"><h3 className={book_list_title}>Book List</h3></Col>
            {books.map(b => <Book key={b._id} book={b}/>)}
        </Col>
    );
};

export default BookList;