import React from 'react';

import Typography from '@material-ui/core/Typography';
import './EmptyList.css'

function EmptyList() {
    return (
        <div className='empty-list'>
            <Typography variant="h8" >
                There aren't any categories yet.
            </Typography>
        </div>
    )
}

export default EmptyList