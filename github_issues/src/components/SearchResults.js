import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGithubIssues } from '../api';

import styles from './../styles/search_results.module.scss';
import IssuesList from './IssuesList';
import Filters, { FILTERS_VALUES } from './Filters';
import { ReactComponent as CloseIcon } from '../icons/close.svg';

const SearchResults = props => {
    const [ filter, setFilter ] = useState(FILTERS_VALUES[0]);
    const [ issues, setIssues ] = useState([]);

    useEffect(() => {
        getGithubIssues(props.repo)
            .then(response => response.json())
            .then(data => setIssues(data));
    }, [])

    return (
        <div className={styles.search_results}>
            <div className={styles.header}>
                <span className={styles.title}>Github Issue Viewer</span>
                <span className={styles.link}>{'https://github.com/facebook/react'}</span>
            </div>
            <div className={styles.filters_wrapper}>
                <Link to="/">
                    <CloseIcon className={styles.close_icon} />
                </Link>
                <Filters filter={filter} setFilter={setFilter}/>
                <IssuesList filter={filter} issues={issues}/>
            </div>
        </div>
    )
}

export default SearchResults;