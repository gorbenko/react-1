import React from 'react';
import classes from './SuperInput.module.css';

const SuperInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.SuperInput} {...props} />
    );
});

export default SuperInput;