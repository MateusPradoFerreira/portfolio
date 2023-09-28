import { styled } from '../../globalStyles';

export const Container = styled('section', {
    layout: 1240,
    padding: '0 40px',
});

export const Heading = styled('h1', {
    fontSize: 55,
    fontWeight: 300,
    textAlign: 'center',
});

export const SummaryText = styled('p', {
    maxWidth: 350,
    margin: '0 auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 300,
    marginTop: 5,
    lineHeight: '25px',
});

export const ContainerInfos = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    "@mobile": {
        flexDirection: "column",
    }
});

export const Img = styled('img', {
    width: 570,

    "@mobile": {
        width: "100%",
    }
});

export const Description = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: 25,

    p: {
        textAlign: 'right',
        maxWidth: 480,
        fontSize: 16,
        lineHeight: '25px',
        letterSpacing: 0.4
    },

    span: {
        textAlign: 'right',
        maxWidth: 350,
        fontSize: 18,
        lineHeight: '25px',
    },

    "@mobile": {
        p: {
            textAlign: 'center',
            maxWidth: "none",
        },
    }
});
