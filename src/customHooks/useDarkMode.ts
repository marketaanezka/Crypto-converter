import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = (): void => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return [theme, toggleTheme];
};
