import React from 'react';
import Issue from './Issue';

import styles from './../styles/issues_list.module.scss';

const IssuesList = props => {
    const { issues, filter } = props;
    let filteredIssues;

    switch(filter){
        case 'Open Issues':
            filteredIssues = issues.filter(i => i.state === 'open');    
            break;
        case 'Closed Issues':
           filteredIssues = issues.filter(i => i.closed_at !== null);
           break;
        case 'Pull Requests':
            filteredIssues = issues.filter(i => i.pull_request);
            break;
        default:
            filteredIssues = issues;
    }

    if (filteredIssues.length === 0) {
        return (
            <div className={styles.issues_not_found}>
                No issues found
            </div>
        )
    }

    return (
        <div className={styles.issues_list}>
            { filteredIssues.map(i => <Issue issue={i} key={i.id} />) }
        </div>
    )
}

export default IssuesList;