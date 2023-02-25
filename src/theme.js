import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

//color design tokens
export const tokens = (mode) =>({
	...(mode === 'dark' ? 
	{
		gray: {
		  50: '#C2C2C2',
		  100: '#B8B8B8',
		  200: '#A3A3A3',
		  300: '#8F8F8F',
		  400: '#7A7A7A',
		  500: '#666666',
		  600: '#4A4A4A',
		  700: '#2E2E2E',
		  800: '#121212',
		  900: '#000000'
		},
		primary: {
		  50: '#4C67AC',
		  100: '#465F9E',
		  200: '#3A4E82',
		  300: '#2D3D65',
		  400: '#1F2A40',
		  500: '#141B2D',
		  600: '#030406',
		  700: '#000000',
		  800: '#000000',
		  900: '#000000'
		},
		greenAccent: {
		  50: '#DCF5EF',
		  100: '#CCF1E7',
		  200: '#ACE8D9',
		  300: '#8CE0CA',
		  400: '#6CD7BB',
		  500: '#4CCEAC',
		  600: '#31B190',
		  700: '#24856C',
		  800: '#185948',
		  900: '#0C2D25'
		},
		redAccent: {
		  50: '#F9E4E3',
		  100: '#F6D3D2',
		  200: '#EFB2B0',
		  300: '#E9918E',
		  400: '#E2706C',
		  500: '#DB4F4A',
		  600: '#C62D27',
		  700: '#97221E',
		  800: '#681815',
		  900: '#390D0B'
		},
		blueAccent: {
		  50: '#FFFFFF',
		  100: '#FFFFFF',
		  200: '#DEE0FE',
		  300: '#B7BBFD',
		  400: '#8F95FB',
		  500: '#6870FA',
		  600: '#323DF8',
		  700: '#0814EA',
		  800: '#060FB4',
		  900: '#040B7D'
		}
	}
	: {
		gray: {
		  900: '#C2C2C2',
		  800: '#B8B8B8',
		  700: '#A3A3A3',
		  600: '#8F8F8F',
		  500: '#7A7A7A',
		  400: '#666666',
		  300: '#4A4A4A',
		  200: '#2E2E2E',
		  100: '#121212',
		  50: '#000000'
		},
		primary: {
		  900: '#4C67AC',
		  800: '#465F9E',
		  700: '#3A4E82',
		  600: '#2D3D65',
		  500: '#212C49',
		  400: '#899bc9',
		  300: '#030406',
		  200: '#000000',
		  100: '#000000',
		  50: '#000000'
		},
		greenAccent: {
		  900:'#DCF5EF',
		  800: '#CCF1E7',
		  700: '#ACE8D9',
		  600: '#8CE0CA',
		  500: '#6CD7BB',
		  400: '#4CCEAC',
		  300: '#31B190',
		  200: '#24856C',
		  100: '#185948',
		  50: '#0C2D25'
		},
		redAccent: {
		  900:'#F9E4E3',
		  800: '#F6D3D2',
		  700: '#EFB2B0',
		  600: '#E9918E',
		  500: '#E2706C',
		  400: '#DB4F4A',
		  300: '#C62D27',
		  200: '#97221E',
		  100: '#681815',
		  50: '#390D0B'
		},
		blueAccent: {
		  900:'#FFFFFF',
		  800: '#FFFFFF',
		  700: '#DEE0FE',
		  600: '#B7BBFD',
		  500: '#8F95FB',
		  400: '#6870FA',
		  300: '#323DF8',
		  200: '#0814EA',
		  100: '#060FB4',
		  50: '#040B7D'
		}
	})
});

//mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);

	return {
		palette: {
			mode: mode,
			...(mode === 'dark' ?
			{
				primary: {
					main: colors.primary[500],
				},
				secondary: {
					main: colors.greenAccent[500],
				},
				neutral: {
					dark: colors.gray[700],
					main: colors.gray[500],
					light: colors.gray[100],
				},
				background: {
					default: colors.primary[500],
				}
			}
			: {
				primary: {
					main: colors.primary[500],
				},
				secondary: {
					main: colors.greenAccent[500],
				},
				neutral: {
					dark: colors.gray[700],
					main: colors.gray[500],
					light: colors.gray[100],
				},
				background: {
					default: "#fcfcfc",
				},
			}),
		},
		typography: {
			fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 14,
			},
		},
	};
};

//context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {}
});

export const useMode = () => {
	const [mode, setMode] = useState('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => 
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};