import React, { useState } from 'react';

import styles from './../styles/search_results.module.scss';
import IssuesList from './IssuesList';
import Filters, { FILTERS_VALUES } from './Filters';

const SearchResults = props => {
    const [ filter, setFilter ] = useState(FILTERS_VALUES[0]);

    return (
        <div className={styles.search_results}>
            <div className={styles.header}>
                <span className={styles.title}>Github Issue Viewer</span>
                <span className={styles.link}>{'https://github.com/facebook/react'}</span>
            </div>
            <div className={styles.filters_wrapper}>
                <Filters filter={filter} setFilter={setFilter}/>
                <IssuesList />
            </div>
        </div>
    )
}

export default SearchResults;