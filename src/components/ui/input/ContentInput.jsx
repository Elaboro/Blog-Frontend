import React from 'react';
import classes from './ContentInput.module.css'

const ContentInput = (props) => {
    return(
        <input className={classes.contentInput} {...props}/>
    );
};

export default ContentInput;