import React, { useState } from 'react';
import BookInfoTabs from './BookInfoTabs';
import BookReviews from './BookReviews';
import BookSummary from './BookSummary';

import { bookInfoView } from './../../styles/componenets/book_info_view.scss';

const BookInfoView = props => {
    const { book } = props;
    const tabs = ['Summary', 'Reviews'];
    const [ selectedTab, setSelectedTab ] = useState(tabs[0]);

    return (
        <div className={bookInfoView}>
            <BookInfoTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={tabs} />
            {selectedTab === 'Summary' ? (
                <BookSummary />
            ) : (
                <BookReviews />
            )}
        </div>
    )
}

export default BookInfoView;