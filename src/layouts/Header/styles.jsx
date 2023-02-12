import { css, keyShow, styled } from '../../globalStyles';

export const Container = styled('header', {
    layout: 1240,
    padding: '0 20px',
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
});

export const NavItem = styled('a', {
    color: '$grey900',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 400,
    animation: `${keyShow} 1s ease-in-out`,

    '&:hover': {
        color: '$purple500',
    },
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

    '&:hover': {
        scale: 1.5,
        path: {
            color: '$purple500',
        },
    },
});

export const IconCSS = css({
    width: 16,
    height: 16,
});
