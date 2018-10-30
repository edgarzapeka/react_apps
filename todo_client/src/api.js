const host = 'http://localhost:3333/todo';
const headers = {
    'Content-Type': 'application/json'
};

export const fetchTodos = () => {
    return fetch(`${host}/`);
};

export const addTodo = (text) => {
    return fetch(`${host}/`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ 'text' : text })
    });
};

export const deletePost = (postId) => {
    return fetch(`${host}/`, {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify({ id: postId })
    });
};

export const updatePost = (id, text) => {
    return fetch(`${host}/`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ id: id, text: text })
    });
};