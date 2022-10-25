import React, { FC } from 'react';
import { ButtonProps } from '../../../type/Type';
import classes from './DeleteButton.module.css'

const DeleteButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
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