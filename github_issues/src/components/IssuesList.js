import React from 'react';
import Filters from './Filters';
import Issue from './Issue';

import styles from './../styles/issues_list.module.scss';
import { getIssues } from './../api';

const IssuesList = props => {
    const issues = getIssues();

    return (
        <div className={styles.issues_list}>
            { issues.map(i => <Issue issue={i} key={i.id} />) }
        </div>
    )
}

export default IssuesList;