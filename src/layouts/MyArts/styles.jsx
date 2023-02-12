import { styled } from '../../globalStyles';

export const Container = styled('div', {
    layout: 1240,
    padding: '0 20px',
    paddingBottom: 30,
});

export const Heading = styled('h1', {
    fontSize: 55,
    fontWeight: 300,
});

export const SummaryText = styled('p', {
    maxWidth: 585,
    fontSize: 18,
    fontWeight: 300,
    marginTop: 30,
    lineHeight: '25px',
});

export const Content = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

export const ArtsContainer = styled('div', {
    columnCount: 3,
    maxWidth: 660,
    gap: 30,
    marginTop: 45,
});

export const Drawing = styled('img', {
    width: '100%',
    marginBottom: 30,
    filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25))',
    borderRadius: 10,
    objectFit: 'cover',
    objectPosition: 'center',
});

export const JezgaContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
});

export const Jezga = styled('img', {
    width: 388,
});

export const JezgaHeading = styled('h2', {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 300,
    textTransform: 'uppercase',

    span: {
        color: '$purple500',
        fontWeight: 700,
    },
});

export const Button = styled('button', {
    backgroundColor: '$grey50',
    padding: '15px 60px',
    fontSize: 16,
    color: '$purple500',
    fontWeight: 600,
    border: '2px solid $purple500',
    width: 'fit-content',
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
        backgroundColor: '$purple500',
        color: '$grey50',
    },
});
