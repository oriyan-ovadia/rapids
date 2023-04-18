import { css, cx } from '@linaria/core';
import cc from 'classcat';
import React from 'react';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { fontSize, transitionDuration } from '../../../theme/theme';
import { IconType } from '../../../models';
import { Icon } from '../Icon/Icon';

export interface ButtonProps extends ButtonBaseProps {
    appearance?: 'contained' | 'ghost';
    className?: string;
    endIcon?: IconType;
    intent?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    startIcon?: IconType;
}

const sizeCss = {
    sm: css`
        height: 32px;
        font-size: ${fontSize.sm};
    `,
    md: css`
        height: 40px;
        font-size: ${fontSize.sm};
    `,
    lg: css`
        height: 48px;
        font-size: ${fontSize.md};
    `
};

const skinCss = {
    contained: {
        primary: css`
            background-color: var(--primary);
            color: var(--white);
            border-color: var(--black);

            :hover,
            :active {
                background-color: var(--white);
                color: var(--text);
                border-color: var(--text);
            }

            :active {
                background-color: var(--accent-2);
            }
        `,
        secondary: css``
    },
    ghost: {
        primary: css`
            background-color: transparent;
            color: var(--text);
            border-color: transparent;

            :hover,
            :active {
                background-color: var(--accent-2);
                color: var(--text);
                border-color: transparent;
            }

            :active {
                background-color: var(--accent-3);
            }
        `,
        secondary: css``
    }
};

const btnCss = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    border: 1px solid currentColor;
    border-radius: 5px;
    font-weight: 500;
    padding-inline: 12px;
    transition-property: border-color, background-color, color, transform, box-shadow;
    transition-duration: ${transitionDuration.fast};
    transition-timing-function: ease;
    user-select: none;

    :focus-visible {
        outline: 0;
        box-shadow: 0 0 0 1px white, 0 0 0 3px var(--black);
    }

    :disabled {
        color: var(--accent-3);
        background-color: var(--accent-1);
        border-color: var(--accent-2);
        opacity: 0.5;
        cursor: not-allowed;
    }

    :active {
        transition: unset;
    }
`;

const Button = ({
    appearance = 'contained',
    className,
    children,
    endIcon,
    intent = 'primary',
    size = 'md',
    startIcon,
    ...restProps
}: ButtonProps) => {
    return (
        <ButtonBase
            className={cc([btnCss, sizeCss[size], skinCss[appearance][intent], className])}
            {...restProps}>
            {startIcon && <Icon className="Button__startIcon" icon={startIcon} size={size} />}
            <span className="Button__children">{children}</span>
            {endIcon && <Icon className="Button__endIcon" icon={endIcon} size={size} />}
        </ButtonBase>
    );
};

export { Button };
