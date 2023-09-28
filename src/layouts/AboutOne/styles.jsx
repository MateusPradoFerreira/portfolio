import { keyShow, styled } from '../../globalStyles';

export const Container = styled('section', {
    layout: 1240,
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    "@mobile": {
        flexDirection: "column",
        justifyContent: 'center',
    }
});

export const Infos = styled('div', {
    maxWidth: 590,
    marginTop: 60,

    "@mobile": {
        order: 2,
    }
});

export const Heading = styled('h1', {
    fontSize: 55,
    fontWeight: 300,
    animation: `${keyShow} 1s ease-in-out`,
    letterSpacing: -0.4
});

export const OccupationArea = styled('h2', {
    fontSize: 24,
    fontWeight: 300,
    textTransform: 'uppercase',
    marginTop: 10,
    animation: `${keyShow} 1s ease-in-out`,
    letterSpacing: 0.4,

    span: {
        color: '$purple500',
        fontWeight: 500,
    },
});

export const Text = styled('p', {
    marginTop: 30,
    lineHeight: '25px',
    fontSize: 16,
    animation: `${keyShow} 1s ease-in-out`,
    letterSpacing: 0.4
});

export const Button = styled('button', {
    marginTop: 60,
    padding: '15px 60px',
    borderRadius: 10,
    backgroundColor: '$grey50',
    fontSize: 14,
    textTransform: 'uppercase',
    color: '$purple500',
    fontWeight: 500,
    border: '2px solid $purple500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    animation: `${keyShow} 1s ease-in-out`,

    '&:hover': {
        color: '$white',
        backgroundColor: '$purple500',
    },

    "@mobile": {
        marginTop: 30,
    }
});

export const Photo = styled('img', {
    width: 500,
    animation: `${keyShow} 1s ease-in-out`,

    "@mobile": {
        width: "100%",
    }
});
