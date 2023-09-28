import { css, keyShow, styled } from '../../globalStyles';

export const Container = styled('header', {
    layout: 1240,
    padding: '0 40px',
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const NavBar = styled('nav', {
    display: 'flex',
    gap: 30,
    padding: '10px 0px 10px 30px',
    borderLeft: '10px solid $purple500',
    transition: 'all 0.5s',

    variants: {
        open: {
            true: {
                left: 0,
            }
        }
    },

    "@mobile": {
        position: "fixed",
        top: 0,
        width: 300,
        left: "-100%",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#fff",
        zIndex: 999,
        padding: 24,
        gap: 16,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    }
});

export const NavItem = styled('a', {
    color: '$grey900',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 400,
    animation: `${keyShow} 1s ease-in-out`,
    transition: 'all 0.2s',

    '&:hover': {
        color: '$purple500',
    },

    "@mobile": {
        padding: "16px 24px",
        width: "100%",

        '&:hover': {
            color: '#fff',
            backgroundColor: '$purple500',
            borderRadius: 4,
        },
    }
});

export const SocialMediaIcons = styled('div', {
    gap: 15,
    display: 'flex',
    alignItems: 'center',
});

export const Icon = styled('a', {
    color: '$grey900',
    transition: 'all 0.2s',
    animation: `${keyShow} 1s ease-in-out`,
});

export const IconCSS = css({
    width: 16,
    height: 16,
    cursor: "pointer",
    transition: 'all 0.2s',

    '&:hover': {
        scale: 1.5,
        path: {
            color: '$purple500',
        },
    },

    "@mobile": {
        width: 18,
        height: 18,
    }
});

export const ButtonMenuMobile = styled('div', {
    display: "none",

    "@mobile": {
        display: "block",
    }
});

export const ButtonMenuMobileInter = styled('div', {
    display: "none",

    "@mobile": {
        display: "flex",
        width: "100%",
        justifyContent: "end",
    }
});