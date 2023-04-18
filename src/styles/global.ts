import { css } from '@linaria/core';
import { fonts } from './theme';
import { fontSize } from '../theme/theme';

export const globalCss = css`
    :global() {
        body {
            font-family: ${fonts.primary};
            font-size: ${fontSize.sm};
            -webkit-font-smoothing: antialiased;
        }
    }
`;
