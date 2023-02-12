import { styled } from '../../globalStyles';

export const Container = styled('section', {
    layout: 1240,
    padding: '0 20px',
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
});

export const Img = styled('img', {
    width: 570,
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
    },

    span: {
        textAlign: 'right',
        maxWidth: 350,
        fontSize: 18,
        lineHeight: '25px',
    },
});
