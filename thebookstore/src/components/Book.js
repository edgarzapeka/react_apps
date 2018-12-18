import React from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

import { bookItem } from './../styles/componenets/book_list.scss';

const Book = props => {

    return (
        <Col md="3" className={bookItem}>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="book image"/>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Book;