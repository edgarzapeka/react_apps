import React from 'react';

import styles from './../styles/search_results.module.scss';
import IssuesList from './IssuesList';
import Filters from './Filters';

const SearchResults = props => {

    return (
        <div className={styles.search_results}>
            <div className={styles.header}>
                <span className={styles.title}>Github Issue Viewer</span>
                <span className={styles.link}>{'https://github.com/facebook/react'}</span>
            </div>
            <div className={styles.filters_wrapper}>
                <Filters />
                <IssuesList />
            </div>
        </div>
    )
}

export default SearchResults;