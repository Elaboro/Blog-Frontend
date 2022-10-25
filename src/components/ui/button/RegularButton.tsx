import React, { FC } from 'react';
import { ButtonProps } from '../../../type/Type';
import classes from './RegularButton.module.css'

const RegularButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
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