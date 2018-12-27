import React from 'react';
import { Row, Col } from 'reactstrap';

import BookInfoTab from './BookInfoTab';

const BookInfoTabs = props => {
    const tabs = ['Summary', 'Reviews'];

    return (
        <Row>
            {tabs.map(t => <BookInfoTab key={t} tab={t} />)}
        </Row>
    )
}

export default BookInfoTabs;