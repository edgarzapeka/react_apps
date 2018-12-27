import React from 'react';

import { book_info_tab } from './../../styles/componenets/book_info_tab.scss';
import { Col } from 'reactstrap';

const BookInfoTab = props => {
    return (
        <Col md="2" className={book_info_tab}>
            {props.tab}
        </Col>
    )
}

export default BookInfoTab;