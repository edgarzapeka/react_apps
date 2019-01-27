import React from 'react';
import Tag from './Tag';

import styles from './../styles/issue.module.scss';
import { ReactComponent as IssueClosedIcon } from '../icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../icons/pull-request.svg';

const Issue = props => {
    const { issue } = props;
    console.log(issue)

    const getStatusIcon = (issue) => {
        if (issue.pull_request !== undefined) {
            return (<PullRequestIcon className={styles.issue_icon}/>);
        } else if (issue.status !== 'open') {
            return (<IssueClosedIcon className={styles.issue_icon}/>);
        }
    }

    return (
        <div className={styles.issue_wrapper}>
            <div className={styles.issue_title}>
                { getStatusIcon(issue) }
                <span className={styles.issue_title_text}>
                    {issue.title}
                </span>
            </div>
            <span className={styles.issue_body}>{issue.body ? issue.body : 'No description provided'}</span>
            <div className={styles.tags_list}>
                { issue.labels.map(t => <Tag key={t.id} tag={t.name} />) }
            </div>
        </div>
    );
};

export default Issue;