import React from 'react';

import { content } from './../../styles/componenets/book_content.scss';

const BookContent = props => {
    return (
        <div className={content}>
            <h1>Hi. It's a content</h1>
        </div>
    );
};

export default BookContent;