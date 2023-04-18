import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
    return (
        <Helmet>
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export { Head };
