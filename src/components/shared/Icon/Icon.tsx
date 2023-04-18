import { css, cx } from '@linaria/core';
import React, { useEffect, useState } from 'react';
import { IconType } from '../../../models';

const IconSize = {
    Sm: '16px',
    Md: '20px',
    Lg: '24px'
};

export interface IconProps {
    className?: string;
    icon: IconType;
    size?: 'sm' | 'md' | 'lg';
}

const sizeCss = {
    sm: css`
        > svg {
            width: ${IconSize.Sm};
            height: ${IconSize.Sm};
        }
    `,
    md: css`
        > svg {
            width: ${IconSize.Md};
            height: ${IconSize.Md};
        }
    `,
    lg: css`
        > svg {
            width: ${IconSize.Lg};
            height: ${IconSize.Lg};
        }
    `
};

const iconCss = css`
    display: inline-flex;
    align-items: center;
`;

const Icon = ({ className, icon, size = 'md', ...restProps }: IconProps) => {
    const [IconComponent, setIconComponent] = useState(null);

    // Lazy load icon
    useEffect(() => {
        const importIcon = async () => {
            try {
                const { default: importedIcon } = await import(`./icons/${icon}.svg`);
                setIconComponent(importedIcon);
            } catch (error) {
                console.warn(`Failed to load icon: \`${icon}\``);
            }
        };
        importIcon();
    }, [icon]);

    if (!IconComponent) {
        return null;
    }

    // TODO: Figure out how to remove <span> wrapper

    return (
        <span className={cx(iconCss, sizeCss[size], className)} {...restProps}>
            {IconComponent}
        </span>
    );
};

export { Icon };
