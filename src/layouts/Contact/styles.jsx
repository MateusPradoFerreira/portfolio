import { css, styled } from '../../globalStyles';

export const Container = styled('div', {
    background:
        'linear-gradient(180deg, #9C27B0 0%, #A8359B 49.22%, #B0408C 83.6%, #C05370 99.98%, #D26851 99.99%, #FFA000 100%)',
    paddingBottom: 80,
    paddingTop: 80,
    marginTop: -20,

    "@mobile": {
        paddingBottom: 28,
    }
});

export const Content = styled('div', {
    layout: 1240,
    padding: '0 40px',
});

export const WavePurple = styled('img', {
    width: '100%',
});

export const Heading = styled('h1', {
    fontSize: 55,
    fontWeight: 300,
    color: '$grey50',
    marginBottom: 60,
});

export const SummaryText = styled('p', {
    maxWidth: 585,
    margin: '0 auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 300,
    marginTop: 30,
    lineHeight: '25px',
    color: '$grey50',
});

export const PersonalInformation = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #FFFFFF',
    paddingBottom: 30,

    "@mobile": {
        flexDirection: "column",
        borderBottom: "none",
    }
});

export const Infos = styled('div', {
    maxWidth: 435,
    
    "@mobile": {
        marginBottom: 24,
        maxWidth: "none",
        width: "100%",
    }
});

export const Head = styled('h2', {
    fontSize: 24,
    fontWeight: 500,
    color: '$grey50',
    marginBottom: 30,
});

export const Description = styled('p', {
    marginTop: 30,
    fontSize: 16,
    LineHeight: '25px',
    color: '$grey50',
});

export const IndividualContact = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    marginBottom: 12,

    span: {
        color: '$grey50',
        fontSize: 14,
    },
});

export const Icon = styled('div', {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '$grey50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
});

export const IconCSS = css({
    width: 20,
    height: 20,

    path: {
        color: '$purple500',
    },
});

export const Icon2 = styled('a', {});

export const Icon2CSS = css({
    width: 20,
    height: 20,

    path: {
        color: '$grey50',
    },

    '&:hover': {
        scale: 1.2,
    },
});

export const SocialMediaIcons = styled('div', {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
});

export const NavBar = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,

    "@mobile": {
        display: "none",
    }
});

export const Item = styled('a', {
    textDecoration: 'none',
    color: '$grey50',
    textTransform: 'uppercase',
    fontSize: 14,
    marginTop: 30,

    '&:hover': {
        textDecoration: 'underline',
    },
});

export const ContactForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
});

export const ContactFormRow = styled('div', {
    minWidth: 652,
    display: 'flex',
    gap: 15,
    justifyContent: 'end',

    "@mobile": {
        minWidth: "100%",
        width: "100%",
    }
});

export const Input = styled('input', {
    width: '100%',
    outline: 'none',
    padding: '10px 30px',
    backgroundColor: 'transparent',
    border: '2px solid $grey50',
    borderRadius: 25,
    color: '$grey50',

    '&::placeholder': {
        color: '$grey50',
    },
});

export const TextArea = styled('textarea', {
    resize: 'none',
    width: '100%',
    outline: 'none',
    padding: '10px 30px',
    backgroundColor: 'transparent',
    border: '2px solid $grey50',
    borderRadius: 25,
    height: 195,
    color: '$grey50',

    '&::placeholder': {
        color: '$grey50',
    },
});

export const SubmitButton = styled('button', {
    backgroundColor: 'transparent',
    color: '$grey50',
    cursor: 'pointer',
    padding: '15px 60px',
    fontWeight: 600,
    border: '2px solid $grey50',
    borderRadius: 10,

    '&:hover': {
        backgroundColor: '$grey50',
        color: '$purple500',
    },
});
