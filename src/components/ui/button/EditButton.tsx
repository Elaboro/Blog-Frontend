import React, { FC } from 'react';
import { ButtonProps } from '../../../type/Type';
import classes from './EditButton.module.css'

const EditButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
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