import React, { FC } from 'react';
import classes from './ContentInput.module.css'
import { ContentInputProps } from "../../../type/Type";

const ContentInput: FC<ContentInputProps> = (
    props,
) => {
    return(
        <input className={classes.contentInput} {...props}/>
    );
};

export default ContentInput;