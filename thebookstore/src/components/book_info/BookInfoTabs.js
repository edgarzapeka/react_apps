import React from 'react';
import BookInfoTab from './BookInfoTab';

import { tabsBlock } from './../../styles/componenets/book_info_tabs.scss';

const BookInfoTabs = props => {
    const { tabs, selectedTab, setSelectedTab } = props;

    return (
        <div className={tabsBlock}>
            {tabs.map(t => <BookInfoTab key={t} tab={t} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />)}
        </div>
    )
}

export default BookInfoTabs;