import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#e85d04',
      secondary: '#c6f23a',
      background: '#eef1ec',
      text: '#0b0d0c',
      accent: '#e85d04',
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#ff8a3d',
      secondary: '#c6f23a',
      background: '#0b0d0c',
      text: '#eef1ec',
      accent: '#ff8a3d',
    }
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light;
    }
    return savedTheme === 'dark' ? themes.dark : themes.light;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.name);
    document.documentElement.classList.toggle('dark', theme.name === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme.name === 'light' ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
