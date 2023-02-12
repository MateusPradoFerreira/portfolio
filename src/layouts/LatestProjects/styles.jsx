import { keyRadiiVariantMove, styled } from '../../globalStyles';

export const Container = styled('div', {
    layout: 1240,
    padding: '0 20px',
});

export const Heading = styled('h1', {
    fontSize: 55,
    fontWeight: 300,
    textAlign: 'center',
});

export const SummaryText = styled('p', {
    maxWidth: 585,
    margin: '0 auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 300,
    marginTop: 30,
    lineHeight: '25px',
});

export const ProjectsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 60,
    gap: 30,
});

export const ProjectBox = styled('div', {
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer',

    '&:hover': {
        scale: 1.1,
    },

    variants: {
        shortly: {
            true: {
                cursor: 'auto',

                '&:hover': {
                    scale: 1,
                    pointerEvents: 'none',
                },
            },
        },
    },
});

export const ProjectImg = styled('img', {
    width: 350,
    height: 170,
    objectFit: 'cover',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    objectPosition: 'top',
});

export const ProjectName = styled('h2', {
    marginTop: 15,
    fontSize: 24,
});

export const Area = styled('p', {
    marginTop: 5,
    fontFamily: '$Poppins',
    fontSize: 12,
    color: '$purple500',
});
