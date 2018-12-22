import React from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

import { bookItem } from './../styles/componenets/book_list.scss';

const Book = props => {
    const { title, description } = props.book;

    return (
        <Col md="3" className={bookItem}>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="book image"/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button>See more</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Book;