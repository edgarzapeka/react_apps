import React from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle, CardHeader, CardSubtitle, CardLink, Col } from 'reactstrap';

import { bookItem } from './../styles/componenets/book_list.scss';

const Book = props => {
    const { title, description, author, price, createdAt, updatedAt } = props.book;
    console.log(props.book)

    return (
        <Col md="3" className={bookItem}>
            <Card>
                <CardHeader>{title}</CardHeader>
                {//<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="book image"/>
                }
                <CardBody>
                    <CardTitle>Author: {author}</CardTitle>
                    <CardSubtitle>Price: {price}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <CardLink href="#">See more</CardLink>
                    {updatedAt && (
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    )}
                </CardBody>
            </Card>
        </Col>
    );
};

export default Book;