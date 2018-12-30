import React from 'react';
import { connect } from 'react-redux';

import { content } from './../../styles/componenets/book_summary.scss';

const BookSummary = props => {
    const { book } = props;

    if (!book) return null;
    return (
        <div className={content}>
            <h1>{book.summary}</h1>
        </div>
    );
}

const mapStateToProps = state => ({
    book: state.books.selectedBook
});

export default connect(mapStateToProps)(BookSummary);