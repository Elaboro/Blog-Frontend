import React from 'react';
import classes from './RegularButton.module.css'

const RegularButton = ({children, ...props}) => {
    return (
        <button
            className={classes.regularButton}
            {...props} 
        >
            {children}
        </button>
    );
};

export default RegularButton;