import React from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle, CardHeader, CardSubtitle, CardLink, Col } from 'reactstrap';

import { bookItem } from './../styles/componenets/book_list.scss';

const Book = props => {
    const { title, description, author, price, createdAt, updatedAt } = props.book;
    console.log(props.book)

    return (
        <Col md="12" className={bookItem}>
            <h3>{title}</h3>
        </Col>
    );
};

export default Book;