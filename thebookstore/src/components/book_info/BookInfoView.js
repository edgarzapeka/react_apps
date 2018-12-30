import React, { useState } from 'react';
import BookInfoTabs from './BookInfoTabs';
import BookContent from './BookContent';

import { bookInfoView } from './../../styles/componenets/book_info_view.scss';

const BookInfoView = props => {
    const { book } = props;
    const tabs = ['Summary', 'Reviews'];
    const [ selectedTab, setSelectedTab ] = useState(tabs[0]);

    return (
        <div className={bookInfoView}>
            <BookInfoTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={tabs} />
            <BookContent />
        </div>
    )
}

export default BookInfoView;