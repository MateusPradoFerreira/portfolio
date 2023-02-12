import { css, keyShow, styled } from '../../globalStyles';

export const Container = styled('div', {
    layout: 1200,
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gap: 20,
    borderTop: '2px solid $grey400',
    borderBottom: '2px solid $grey400',
    animation: `${keyShow} 1s ease-in-out`,
});

export const IconCSS = css({
    width: 24,
    height: 24,
    flexShrink: 0,

    path: {
        color: '$purple500',
    },
});
