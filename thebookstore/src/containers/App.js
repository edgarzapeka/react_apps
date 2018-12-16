import React from 'react';
import Header from '../components/Header';
import { Container, Row } from 'reactstrap';
import { Route } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Row>
                    <Route path="/" exact component={() => (<h1>Home page</h1>)} />
                    <Route path="/new" component={() => (<h1>New items page</h1>)} />
                </Row>
            </Container>
        );
    };
};

export default App;