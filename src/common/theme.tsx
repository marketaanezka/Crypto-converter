import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      [key: string]: string;
    };
    fontSize: {
      [key: string]: string;
    };
    padding: {
      [key: string]: string;
    };
    margin: {
      [key: string]: string;
    };
    borderRadius: string;
    cardShadow: string;
  }
}

const commonThemeProperties = {
  fontSize: {
    xs: '0.75rem', //.12
    small: '0.875rem', // 14
    standard: '1rem', // 16
    medium: '1.125rem', // 18
    title: '1.313rem', // 21
    large: '1.5rem', // 24
    xl: '2rem', // 32
  },
  padding: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
  margin: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  borderRadius: '8px',
};

export const theme: DefaultTheme = {
  color: {
    layoutBg: '#f4f8fb',
    cardBg: '#FFFF',
    text: '#001e3c',
    contrastBg: '#436fe5',
    label: '#a0a6af',
    red: '#eb4c9b',
    green: '#1ab586',
  },
  cardShadow: 'rgba(136, 159, 184, 0.145) 0px 6px 12px',
  ...commonThemeProperties,
};

export const darkTheme: DefaultTheme = {
  color: {
    layoutBg: '#082c46',
    cardBg: '#1b3e5a',
    text: '#ffffff',
    contrastBg: '#cbd5f2',
    label: '#bbc5ce',
    //'#c6dbec',
    red: '#eb4c9b',
    green: '#1ab586',
  },
  cardShadow: 'rgb(6 24 38) 0px 6px 12px',
  ...commonThemeProperties,
};

export const centerBlock = `
display: flex;
justify-content: center;
align-items: center;

`;
