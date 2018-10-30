import React from 'react';
import Todo from '../components/Todo';
import { fetchTodos, addTodo, deletePost, updatePost } from '../api';

class TodoList extends React.Component {

    componentDidMount(){
        fetchTodos()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todos: data
                })
            })
    }

    state = {
        todos: [],
        todoText: '',
    }

    makeTodoEditable = () => {
        this.setState((prevState, props) => ({
            isPostEditable: !prevState.isPostEditable
        }))
    }

    addTodo = () => {
        const { todoText } = this.state

        addTodo(todoText)
            .then(response => response.json())
            .then(data => {
                this.setState((prevState, props) => ({
                    todos: [...prevState.todos, data],
                    todoText: '' 
                }))
            }) 
    }

    updateTodo = (id, text) => {
        updatePost(id, text)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(this)
                if (!data.error){
                    this.setState((prevState, props) => ({
                        todos: [...prevState.todos]
                    }))
                }
            })
    }

    deleteTodo = (todoId) => {
        deletePost(todoId)
            .then(response => response.json())
            .then(data => {
                if (!data.error){
                    this.setState((prevState, props) => ({
                        todos: [...prevState.todos].filter(todo => todo._id !== todoId)
                    }))
                    console.log('Filtering...')
                    console.log(this.state.todos)
                } else{
                    console.log(data.error);
                }
            })
    }

    handleChange = (event) => {
        this.setState({
            todoText: event.target.value
        })
    }

    render(){
        const { todos, todoText } = this.state;
        const { mode } = this.props;

        return (
            <div className="row todo-list">
                <div className="col-md-12 add-todo">
                    <input type="text" className="form-control" placeholder="Todo" onChange={this.handleChange} value={todoText}/>
                    <button className="btn btn-primary" onClick={this.addTodo}>Add</button>
                </div>
                <div className="col-md-12 todo-list-items">
                    { todos.map(t => <Todo todo={t} key={t._id} mode={mode} deletePost={this.deleteTodo} updateTodo={this.updateTodo}/>) }
                </div>
            </div>
        );
    };
}

export default TodoList;