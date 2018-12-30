import React from 'react';
import { selectBook } from './../actions';
import { connect } from 'react-redux';

import { bookListItem, bookListItemSelected } from './../styles/componenets/book.scss';

const Book = props => {
    const { book, selectedBook, selectBook } = props;

    return (
        <div className={book === selectedBook ? bookListItemSelected : bookListItem} onClick={() => selectBook(book)}>
            <h3>{book.title}</h3>
        </div>
    );
};

const mapStateToProps = state => ({
    selectedBook: state.books.selectedBook
});
const mapDispatchToProps = dispatch => ({
    selectBook: (book) => dispatch(selectBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);