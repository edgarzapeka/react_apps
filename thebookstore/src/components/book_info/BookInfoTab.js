import React from 'react';

import { book_info_tab } from './../../styles/componenets/book_info_tab.scss';

const BookInfoTab = props => {
    return (
        <div className={book_info_tab}>
            {props.tab}
        </div>
    )
}

export default BookInfoTab;