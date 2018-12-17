import React, { useState, useContext } from 'react';
import ModeContext from '../ModeContext';
import { Row, Button, Input, Alert, Col } from 'reactstrap';

const Todo = props => {
    const { todo, deletePost, updateTodo } = props;
    const [ todoText, setTodoText ] = useState(todo.text);
    const [ isPostEditable, setPostEditable ] = useState(false);
    const [ mode ] = useContext(ModeContext);

    const updateTodoHandler = () => {
        updateTodo(todo._id, todoText);
        setPostEditable(false);
    }

    return (
        <Row className="list-item">
            { isPostEditable ? (
                <Input type="text" className="col item-info" value={ todoText } onChange={(e) => setTodoText(e.target.value)}/>
            ) : (
                <Alert className="col item-info" color="warning">
                    { todoText }
                </Alert>
            ) }
            {mode === 'editing' && (
                <Col md="2" className="action-bar">
                    { !isPostEditable ? (
                        <Button color="info" onClick={() => setPostEditable(!isPostEditable)}>Edit</Button>
                    ) : (
                        <Button color="info" onClick={updateTodoHandler}>Save</Button>
                    ) }
                    <Button color="danger" onClick={() => deletePost(todo._id)}>Delete</Button>
                </Col>
            )}
        </Row>
    );
};

export default Todo;