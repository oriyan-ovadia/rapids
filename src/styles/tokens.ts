import { css } from '@linaria/core';
import { toRem } from '../theme/helpers';

export const tokensCss = css`
    :global() {
        :root {
            --black: #000;
            --white: #fff;

            --primary: var(--black);
            --text: var(--black);

            --accent-1: #fafafa;
            --accent-2: #eaeaea;
            --accent-3: #999;
            --accent-4: #888;
            --accent-5: #666;
            --accent-6: #444;
            --accent-7: #333;
            --accent-8: #111;

            // Contained, Primary
            --btn-contained-primary-bg: var(--primary);
            --btn-contained-primary-fg: var(--white);
            --btn-contained-primary-hover-bg: var(--white);
            --btn-contained-primary-hover-fg: var(--text);

            // Outlined, Primary
            --btn-outlined-primary-bg: var(--primary);
            --btn-outlined-primary-fg: var(--white);

            // Font families
            --font-family-sans: 'Inter';
            --font-family-primary: var(--font-family-sans);

            // Font sizes
            --font-size-xxs: ${toRem(10)};
            --font-size-xs: ${toRem(12)};
            --font-size-sm: ${toRem(14)};
            --font-size-md: ${toRem(16)};
            --font-size-lg: ${toRem(18)};
            --font-size-xl: ${toRem(20)};
            --font-size-xxl: ${toRem(24)};
        }
    }
`;
