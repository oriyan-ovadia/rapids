import React, { ElementType, ReactNode } from 'react';

interface TextProps {
    as?: ElementType;
    children?: ReactNode;
}

const Text = ({ as: Component = 'p', children }: TextProps) => {
    return <Component>{children}</Component>;
};

export { Text };
