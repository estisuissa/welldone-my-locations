import React from 'react';
import Button from '@material-ui/core/Button';

import './Actions.css'
function Actions({ actions }) {

    return (
        <div className='actions'>
            {
                actions.map(({ name, fn }) => <Button className='action-btn' key={name} onClick={fn}>{name}</Button>)
            }
        </div>
    )
}

export default Actions;