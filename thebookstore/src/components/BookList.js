import React, { useState } from 'react';
import Book from './Book';
import { Row } from 'reactstrap';

const BookList = props => {
    const [ books, setBooks ] = useState([1,2,3,4,5,6,7]);

    return (
        <Row>
            {books.map(b => <Book key={b}/>)}
        </Row>
    );
};

export default BookList;