import React from 'react';
import BookInfoTabs from './BookInfoTabs';
import BookContent from './BookContent';

import { bookInfoView } from './../../styles/componenets/book_info_view.scss';

const BookInfoView = props => {
    const { book } = props;

    return (
        <div className={bookInfoView}>
            <BookInfoTabs />
            <BookContent />
        </div>
    )
}

export default BookInfoView;