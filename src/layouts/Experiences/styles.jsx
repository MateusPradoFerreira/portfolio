import { styled, css, keyRadiiVariantMove, keyShow } from '../../globalStyles';

export const Container = styled('div', {
    backgroundColor: '$black',
    paddingTop: 160,
    marginTop: 120,
});

export const Content = styled('div', {
    padding: '0 40px',
    paddingBottom: 40,
    layout: 1240,
});

export const WaveGrey = styled('img', {
    width: '100%',
});

export const Technologies = styled('div', {});

export const General = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 60,
    marginTop: 30,

    "@mobile": {
        flexDirection: "column",
    }
});

export const Heading = styled('h1', {
    fontSize: 24,
    fontWeight: 300,
    color: '$white',

    variants: {
        big: {
            true: {
                fontSize: 55,
            },
        },
        right: {
            true: {
                textAlign: 'right',
            },
        },
        black: {
            true: {
                color: '$grey900',
            },
        },
    },
});

export const Description = styled('p', {
    maxWidth: 580,
    marginBottom: 40,
    fontSize: 16,
    lineHeight: '25px',
    color: '$grey200',
});

export const TechnologiesContainer = styled('div', {
    marginTop: 30,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 660,
    gap: '15px',

    "@mobile": {
        maxWidth: "100%",
    }
});

export const ExperiencesContainer = styled('div', {
    width: 426,
    backgroundColor: '$grey50',
    boxShadow: '0px 10px 10px rgba(30, 30, 30, 0.25)',
    borderRadius: '30px 10px 30px 10px',
    padding: '40px 24px',
    filter: ' drop-shadow(5px 5px 5px #000000)',
    minHeight: 520,
    flexShrink: 0,
    animation: `${keyRadiiVariantMove} 5s infinite alternate ease-in-out`,

    "@mobile": {
        width: "100%",
    }
});

export const TechnologieBox = styled('div', {
    alignItems: 'center',
    padding: '15px 30px',
    gap: 15,
    borderRadius: '10px 30px 10px 30px',
    filter: ' drop-shadow(5px 5px 5px #00000070)',
    backgroundColor: '#27242C',
    display: 'none',

    variants: {
        animation: {
            true: {
                animation: `${keyShow} 1s ease-in-out`,
                display: 'flex',
            },
        },
    },

    span: {
        fontSize: 18,
        fontWeight: 500,
        color: '$white',
        fontFamily: '$Poppins',
    },

    "@mobile": {
        flexDirection: "column",
        width: "100%",
    }
});

export const TechnologieIcon = css({
    width: 45,
    height: 45,

    path: {
        color: '$purple500',
    },
});

export const ExperienceBox = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    gap: 15,
    marginBottom: 16,

    display: 'none',

    variants: {
        animation: {
            true: {
                animation: `${keyShow} 1s ease-in-out`,
                display: 'flex',
            },
        },
    },
});

export const ExperienceInfos = styled('div', {
});

export const Period = styled('p', {
    textAlign: 'right',
    fontSize: 12,
    color: '$grey700',
    textTransform: 'capitalize',
    marginBottom: 2,
});

export const Area = styled('h3', {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '25px',
});

export const ExperienceDescription = styled('p', {
    textAlign: 'right',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
});

export const SideDecoration = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    div: {
        height: '100%',
        backgroundColor: '$purple500',
        width: 2,
        flexShrink: 0,
        marginTop: -5,
    },
});

export const ExperienceIcon = css({
    width: 24,
    height: 24,
    flexShrink: 0,

    path: {
        color: '$purple500',
    },
});
