import React from 'react';
import classes from './SuperBtn.module.css';

const SuperBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.SuperBtn}>
            {children}
        </button>
    );
};

export default SuperBtn;