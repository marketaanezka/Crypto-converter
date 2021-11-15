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

export const defaultTheme: DefaultTheme = {
  color: {
    white: '#FFFF',
    offWhite: '#F2F2F2',
    black: '#323C46',
    headerGray: '#c6d2df',
    darkGray: '#a0a6af',
    gray: '#b8bdc4',
    lightBlue: '#f0f5fa',
    lightBg: '#f0f5fa',
    red: '#eb4c9b',
    green: '#1ab586',
  },
  fontSize: {
    xs: '0.75rem', //.12
    small: '0.875rem', // 14
    standard: '1rem', // 16
    medium: '1.125rem', // 18
    title: '1.375rem', // 22
    large: '1.5rem', // 24
    quote: '2rem', // 32
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

export const centerBlock = `
display: flex;
justify-content: center;
align-items: center;

`;
