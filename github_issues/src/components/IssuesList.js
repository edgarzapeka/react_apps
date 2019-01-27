import React from 'react';
import Issue from './Issue';

import styles from './../styles/issues_list.module.scss';

const IssuesList = props => {
    const { issues } = props;

    return (
        <div className={styles.issues_list}>
            { issues.map(i => <Issue issue={i} key={i.id} />) }
        </div>
    )
}

export default IssuesList;