import React from 'react';

import { book_info_tab, book_info_tab_selected } from './../../styles/componenets/book_info_tab.scss';

const BookInfoTab = props => {
    const { selectedTab, tab, setSelectedTab } = props;

    return (
        <div className={ tab === selectedTab ? book_info_tab_selected : book_info_tab } onClick={() => setSelectedTab(tab)}>
            {tab}
        </div>
    )
}

export default BookInfoTab;