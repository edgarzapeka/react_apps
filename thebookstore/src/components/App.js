import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';

const BookList = React.lazy(() => import('./BookList'));
const Footer = React.lazy(() => import('./Footer'));
import BookInfoView from './book_info/BookInfoView';

import { Container, Row, Col } from 'reactstrap';

const App = props => {

    return (
        <Container>
            <Header />
            <Col md="12">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={ props =>
                            <Row>
                                <BookList />
                                <BookInfoView />
                            </Row>
                    } />
                    <Route path="/new" component={() => (<h1>New items page</h1>)} />
                </Switch>
            </Suspense>
            </Col>
            <Col md="12">
                <Suspense fallback={<div>Loading footer...</div>}>
                    <Footer />
                </Suspense>
            </Col>
        </Container>
    );
};

export default App;