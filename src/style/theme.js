// color design tokens export
import { typographies } from "./mui/TypographyStyle";


export const tokensDark = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    blue: {
        // blue
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45", // manually adjusted
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    primary: {
        // yellow
        50: "#f0f0f0", // manually adjusted
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
    },
    secondary: {
        100: "#ccede2",
        200: "#99dcc5",
        300: "#66caa9",
        400: "#33b98c",
        500: "#00a76f", // basic
        600: "#008659",
        700: "#006443",
        800: "#00432c",
        900: "#002116"
    },
};

const primary = {
    light: tokensDark.primary[600],
    dark: tokensDark.primary[400]
}

const secondary = {
    light: tokensDark.secondary[600],
    dark: tokensDark.secondary[400]
}

const bgColors = {
    light: {
        dafault: "#fff",
        alt: 'rgb(244, 246, 248)',
    },
    dark: {
        dafault: 'rgb(22, 27, 36)',
        alt: "rgb(33, 43, 54)",
    }
}

const textColors = {
    light: {
        primary: "#000",
        secondary: "#000",
    },
    dark: {
        primary: "#fff",
        secondary: "#fff"
    }
}

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        direction: 'ltr',
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: primary.dark,
                        light: primary.dark,
                        dark: primary.light
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: secondary.dark,
                        light: secondary.light,
                        dark: secondary.dark,
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    text: {
                        primary: textColors.dark.primary,
                        secondary: textColors.dark.secondary,
                        disabled: "#B78282"
                    },
                    background: {
                        default: bgColors.dark.dafault,
                        paper: bgColors.dark.alt,
                        alt: bgColors.dark.alt,
                    },
                    grey: tokensDark.grey,
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: primary.light,
                        light: primary.light,
                        dark: primary.dark
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: secondary.dark,
                        light: secondary.light,
                        dark: secondary.dark,
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensDark.grey[500],
                    },
                    text: {
                        primary: textColors.light.primary,
                        secondary: textColors.light.secondary,
                        disabled: "#B78282"
                    },
                    background: {
                        default: bgColors.light.dafault,
                        paper: bgColors.light.alt,
                        alt: bgColors.light.alt,
                    },
                    grey: tokensDark.grey,

                }),
        },
        typography: typographies,
    };
};