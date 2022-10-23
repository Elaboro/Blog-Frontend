import React from 'react';
import classes from './EditButton.module.css'

const EditButton = ({children, ...props}) => {
    return (
        <button
            className={classes.editButton}
            {...props} 
        >
            {children}
        </button>
    );
};

export default EditButton;