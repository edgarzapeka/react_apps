import React from 'react';

import { bookItem } from './../styles/componenets/book_list.scss';

const Book = props => {
    const { title, description, author, price, createdAt, updatedAt } = props.book;
    console.log(props.book)

    return (
        <div className={bookItem}>
            <h3>{title}</h3>
        </div>
    );
};

export default Book;