import React from 'react';
import BookInfoTab from './BookInfoTab';

import { tabsBlock } from './../../styles/componenets/book_info_tabs.scss';

const BookInfoTabs = props => {
    const tabs = ['Summary', 'Reviews'];

    return (
        <div className={tabsBlock}>
            {tabs.map(t => <BookInfoTab key={t} tab={t} />)}
        </div>
    )
}

export default BookInfoTabs;