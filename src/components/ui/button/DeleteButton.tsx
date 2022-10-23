import React from 'react';
import classes from './DeleteButton.module.css'

const DeleteButton = ({children, ...props}) => {
    return (
        <button
            className={classes.deleteButton}
            {...props} 
        >
            {children}
        </button>
    );
};

export default DeleteButton;