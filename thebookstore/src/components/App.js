import React from 'react';
import Header from './Header';
import BookList from './BookList';
import { Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';

const App = props => {

    return (
        <Container>
            <Header />
            <Col>
                <Route path="/" exact component={BookList} />
                <Route path="/new" component={() => (<h1>New items page</h1>)} />
            </Col>
        </Container>
    );
};

export default App;