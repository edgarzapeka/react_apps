import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import BookList from './BookList';
import Footer from './Footer';

import { Container, Row, Col } from 'reactstrap';

const App = props => {

    return (
        <Container>
            <Header />
            <Col md="12">
                <Route path="/" exact component={BookList} />
                <Route path="/new" component={() => (<h1>New items page</h1>)} />
            </Col>
            <Col md="12">
                <Footer />
            </Col>
        </Container>
    );
};

export default App;