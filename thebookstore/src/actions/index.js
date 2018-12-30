import * as Type from './types';
import * as API from './../api';

export const fetchBooks = () => {
    return dispatch => API.fetchBooks()
        .then(response => response.json())
        .then(data => dispatch(initBooks(data)));
}

export const selectBook = (book) => {
    return {
        type: Type.SET_SELECTED_BOOK,
        book: book
    };
}

const initBooks = data => {
    return {
        type: Type.BOOKS_INIT,
        books: data
    }
}