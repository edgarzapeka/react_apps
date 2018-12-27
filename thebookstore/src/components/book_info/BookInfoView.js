import React from 'react';
import BookInfoTabs from './BookInfoTabs';

import { Col } from 'reactstrap';

const BookInfoView = props => {
    const { book } = props;

    return (
        <Col md="8">
            <BookInfoTabs />
        </Col>
    )
}

export default BookInfoView;