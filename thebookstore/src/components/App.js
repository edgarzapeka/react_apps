import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from './../actions';

const BookList = React.lazy(() => import('./BookList'));
const Footer = React.lazy(() => import('./Footer'));
import BookInfoView from './book_info/BookInfoView';
import Header from './Header';

import { wrapper, content } from './../styles/componenets/app.scss';

const App = props => {
    const { books, isBooksFetched, getAllBooks } = props;

    useEffect(() => {
        if(!isBooksFetched){
            getAllBooks();
        }
    })

    return (
        <div className={wrapper}>
            <Header />
            <div className={content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <BookList />
                    <BookInfoView />
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<div>Loading footer...</div>}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getAllBooks: () => dispatch(fetchBooks())
});

const mapStateToProps = state => ({
    books: state.books.books,
    isBooksFetched: state.books.isBooksFetched
})

export default connect(mapStateToProps, mapDispatchToProps)(App);