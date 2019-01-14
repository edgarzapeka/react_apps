import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

import { Input, Progress } from 'reactstrap';

const PasswordMeter = props => {
    const [ password, setPassword ] = useState('');
    const passwordStrength = ['Weak', 'Fair', 'Good', 'Strong'];
    const progressColorClass = ['danger', 'warning', 'info', 'success'];
    const score = zxcvbn(password).score;

    return (
        <div className="passwordForm">
            <span className="title">Check your password strength!</span>
            <Input placeholder="Type your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="passwordStrength">
                <Progress striped value={25 * score} color={score ? progressColorClass[score - 1] : ''}/>
                <span><strong>Password strength: </strong>{score === 1 || !score ? passwordStrength[0] : passwordStrength[score - 1]}</span>
            </div>
        </div>
    )
}

export default PasswordMeter;