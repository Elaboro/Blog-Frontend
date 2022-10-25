import React, { FC } from 'react';
import { ButtonProps } from '../../../type/Type';
import classes from './CreateButton.module.css'

const CreateButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
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