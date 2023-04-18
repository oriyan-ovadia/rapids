import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@linaria/core';
import cc from 'classcat';
import { fonts } from '../../../styles/theme';

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    isDisabled?: boolean;
}

const btnBaseCss = css`
    font-family: ${fonts.primary};
    background: transparent;
    border: none;
    cursor: pointer;

    :disabled {
        cursor: not-allowed;
    }
`;

const ButtonBase = ({ children, className, isDisabled = false, ...restProps }: ButtonBaseProps) => {
    return (
        <button className={cc([btnBaseCss, className])} disabled={isDisabled} {...restProps}>
            {children}
        </button>
    );
};

export { ButtonBase };
