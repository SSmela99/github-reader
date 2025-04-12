import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            dark: '#111111',
            light: '#F8F7FF',
        },
        gray: {
            main: '#343434',
            light: '#AEB7B3',
            hover: '#848484',
            medium: '#515151',
            raisin: '#232323',
        },
        background: {
            default: '#111111',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;

