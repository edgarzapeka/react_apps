import * as Types from './../actions/types';
import { combineReducers } from 'redux';

const books = (state = booksInitialState, action) => {
    switch(action.type) {
        case Types.BOOKS_INIT:
            return {
                books: action.books,
                isBooksFetched: true,
                selectedBook: action.books[0]
            }
        case Types.SET_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.book
            }
        default:
            return state;
    }
}

const booksInitialState = {
    books: [],
    isBooksFetched: false,
    selectedBook: null
}

export default combineReducers({
    books
})