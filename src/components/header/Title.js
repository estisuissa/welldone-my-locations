import React from 'react';

import Typography from '@material-ui/core/Typography';

function Title({ title }) {
    return (
        <Typography variant="h6" >
            {title}
        </Typography>
    )
}

export default Title