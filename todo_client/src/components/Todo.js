import React from 'react';

class Todo extends React.Component {

    state = {
        todoText: this.props.todo.text,
        isPostEditable: false
    }

    changeText = (event) => {
        this.setState({
            todoText: event.target.value
        })
    }

    makeTodoEditable = () => {
        this.setState((prevState, props) => ({
            isPostEditable: !prevState.isPostEditable
        }))
    }

    updateTodo = () => {
        const { todo, updateTodo } = this.props;
        const { todoText } = this.state;

        updateTodo(todo._id, todoText);
        this.setState({
            isPostEditable: false
        })
    }

    render(){
        const { todo, mode, deletePost} = this.props;
        const { todoText, isPostEditable } = this.state;

        return (
            <div className="row list-item">
                { isPostEditable ? (
                    <input type="text" className="form-control col item-info" value={ todoText } onChange={this.changeText}/>
                ) : (
                    <div className="alert alert-warning col item-info">
                        { todoText }
                    </div>
                ) }
                {mode === 'editing' && (
                    <div className="col-md-2 action-bar">
                        { !isPostEditable ? (
                            <button type="button" className="btn btn-info" onClick={this.makeTodoEditable}>Edit</button>
                        ) : (
                            <button type="button" className="btn btn-info" onClick={this.updateTodo}>Save</button>
                        ) }
                        <button type="button" className="btn btn-danger" onClick={() => deletePost(todo._id)}>Delete</button>
                    </div>
                )}
            </div>
        );
    }
};

export default Todo;