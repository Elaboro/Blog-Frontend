import React from 'react';
import classes from './CreateButton.module.css'

const CreateButton = ({children, ...props}) => {
    return (
        <button
            className={classes.createButton}
            {...props} 
        >
            {children}
        </button>
    );
};

export default CreateButton;