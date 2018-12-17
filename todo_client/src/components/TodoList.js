import React, { useState, useContext, useEffect } from 'react';
import Todo from '../components/Todo';
import { fetchTodos, addTodo, deletePost, updatePost } from '../api';
import ModeContext from '../ModeContext';
import { Row, Col, Input, Button } from 'reactstrap';

const TodoList = props => {
    const [ mode ] = useContext(ModeContext);
    const [ todos, setTodos ] = useState([]);
    const [ addTodoInput, setTodoInput ] = useState('');

    useEffect(() => {
        fetchTodos()
            .then(response => response.json())
            .then(data => {
                setTodos(data)
            })
    }, [])

    const addTodoHandler = () => {
        if (addTodoInput !== '' && addTodoInput){
            addTodo(addTodoInput)
                .then(response => response.json())
                .then(data => {
                    setTodos([...todos, data]);
                }) 
        } 
    }

    const updateTodoHandler = (id, text) => {
        updatePost(id, text)
            .then(response => response.json())
            .then(data => {
                if (data.error){
                    console.log(data.error)
                }
            })
    }

    const deleteTodoHandler = (todoId) => {
        deletePost(todoId)
            .then(response => response.json())
            .then(data => {
                if (!data.error){
                    setTodos(todos.filter(todo => todo._id !== todoId))
                } else{
                    console.log(data.error);
                }
            })
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTodo(); 
        }
    }

    return (
        <Row className="todo-list">
            <Col md="12" className="add-todo">
                <Input type="text" placeholder="Todo" onChange={(e) => setTodoInput(e.target.value)} value={addTodoInput} onKeyPress={handleKeyPress}/>
                <Button onClick={addTodoHandler} color="primary">Add</Button>
            </Col>
            <Col md="12" className="todo-list-items">
                { todos.map(t => <Todo todo={t} key={t._id} mode={mode} deletePost={deleteTodoHandler} updateTodo={updateTodoHandler}/>) }
            </Col>
        </Row>
    );
    
}

export default TodoList;