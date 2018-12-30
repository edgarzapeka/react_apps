import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { bookListTitle } from './../styles/componenets/book_list.scss';

const BookList = props => {
    const { books } = props;

    return (
        <div>
            <h3 className={bookListTitle}>Book List</h3>
            {books.map(b => <Book key={b._id} book={b} />)}
        </div>
    );
};

const mapStateToProps = state => ({
    books: state.books.books,
});

export default connect(mapStateToProps)(BookList);