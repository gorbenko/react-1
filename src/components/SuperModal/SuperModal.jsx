import React from 'react';
import classes from './SuperModal.module.css';

const SuperModal = ({ children, visible, setVisible }) => {
    const rootClases = [classes.SuperModal];

    if (visible) {
        rootClases.push(classes.active);
    }

    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.SuperModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default SuperModal;