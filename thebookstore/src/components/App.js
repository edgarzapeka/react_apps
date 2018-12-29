import React, { Suspense } from 'react';
import Header from './Header';

const BookList = React.lazy(() => import('./BookList'));
const Footer = React.lazy(() => import('./Footer'));
import BookInfoView from './book_info/BookInfoView';

import { wrapper, content } from './../styles/componenets/app.scss';

const App = props => {

    return (
        <div className={wrapper}>
            <Header />
            <div className={content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <BookList />
                    <BookInfoView />
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<div>Loading footer...</div>}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default App;