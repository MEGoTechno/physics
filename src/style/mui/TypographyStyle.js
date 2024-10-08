export const typographies = {

    fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: { fontSize: '.8rem', fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.57 },
    button: { fontWeight: 500 },
    caption: { fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.66 },
    subtitle1: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.66, },
    subtitle2: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.57, },
    overline: {
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase',
    },
    banner: {
        fontSize: '4rem',
        fontWeight: 700,
        '@media (max-width:600px)': {
            fontSize: '3rem',
        },
        textShadow: '0 20px 30px hsla(0, 0%, 0%, 0.1)'
    }, subBanner: {
        fontSize: '2rem',
        fontWeight: 600,

        letterSpacing: 1.8,
        '@media (max-width:600px)': {
            fontSize: '1rem',
        },
        textShadow: '0 20px 30px hsla(0, 0%, 0%, 0.1)'
    },
    h1: {
        fontSize: '3.5rem',
        fontWeight: 700,


    },
    h2: { fontSize: '3rem', fontWeight: 700, },
    h3: { fontSize: '2.25rem', fontWeight: 500, },
    h4: { fontSize: '2rem', fontWeight: 700, },
    h5: { fontSize: '1.5rem', fontWeight: 700, },
    h6: { fontSize: '1.125rem', fontWeight: 700, },
} 