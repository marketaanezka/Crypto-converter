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
  cardShadow: 'rgba(136, 159, 184, 0.145) 0px 6px 12px',
};

export const theme: DefaultTheme = {
  color: {
    cardBg: '#FFFF',
    text: '#324637',
    headerBg: '#436fe5',
    label: '#a0a6af',
    layoutBg: '#f4f8fb',
    red: '#eb4c9b',
    green: '#1ab586',
  },
  ...commonThemeProperties,
};

export const darkTheme: DefaultTheme = {
  color: {
    cardBg: '#2e5e85',
    text: '#ffffff',
    headerBg: '#cbd5f2',
    label: '#e4e4e4',
    layoutBg: '#183c57',
    red: '#eb4c9b',
    green: '#1ab586',
  },
  ...commonThemeProperties,
};

export const centerBlock = `
display: flex;
justify-content: center;
align-items: center;

`;
