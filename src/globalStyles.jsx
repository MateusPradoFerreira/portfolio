import { createStitches, keyframes } from '@stitches/react';

export const { css, styled, globalCss } = createStitches({
    theme: {
        colors: {
            purple500: '#9C27B0',
            purple700: '#7b1fa2',
            grey50: '#f5f5f5',
            grey100: '#F0F0F0',
            grey200: '#E0E0E0',
            grey400: '#a7a7a7',
            grey700: '#757575',
            grey800: '#343434',
            grey900: '#212121',
            white: '#F0F0F0',
            black: '#181719',
        },
        fonts: {
            Poppins: 'Poppins, sans-serif',
            Roboto: 'Roboto, sans-serif',
        },
    },
    utils: {
        layout: (value) => ({
            width: '100%',
            maxWidth: value,
            margin: '0 auto',
        }),
    },
    media: {
        mobile: '(max-width: 640px)',
        desktop: '(max-width: 1440px)',
    },
});

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '$Roboto',
        color: '$grey900',
    },

    html: {
        scrollBehavior: 'smooth',
    },

    body: {
        backgroundColor: '$grey50',
    },

    'button, input': {
        border: 'none',
        outline: 'none',
    },

    '::-webkit-scrollbar-track': {
        backgroundColor: '$grey200',
    },

    '::-webkit-scrollbar': {
        width: 10,
        backgroundColor: '$grey200',
    },

    '::-webkit-scrollbar-thumb': {
        backgroundColor: '$purple500',
        borderRadius: '20px 5px',
    },
});

export const keyRadiiVariantMove = keyframes({
    '0%': { borderRadius: '10px 30px 10px 30px' },
    '100%': { borderRadius: '30px 5px 30px 5px' },
});

export const keyShow = keyframes({
    '0%': {
        transform: 'translateY(5px)',
        opacity: '0',
    },
    '100%': {
        transform: 'none',
        opacity: '100',
    },
});
