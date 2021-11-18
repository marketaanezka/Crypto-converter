export const loadMode = (): string | undefined => {
  try {
    const localMode = localStorage.getItem('mode');
    if (localMode === null) {
      return undefined;
    }
    return localMode;
  } catch (err) {
    return undefined;
  }
};

export const saveMode = (darkMode: boolean): void => {
  const mode = darkMode ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
};
