const host = 'http://localhost:3333/book';
const headers = {
    'Content-Type': 'application/json'
};

export const fetchBooks = () => {
    return fetch(`${host}/`)
}