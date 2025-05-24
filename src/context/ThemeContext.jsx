import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#3B82F6', // blue-500
      secondary: '#1E40AF', // blue-800
      background: '#FFFFFF',
      text: '#1F2937', // gray-800
      accent: '#60A5FA', // blue-400
      sphere: {
        color: '#000000',
        opacity: 0.6,
        emissive: '#000000',
        emissiveIntensity: 0.2
      }
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#60A5FA', // blue-400
      secondary: '#93C5FD', // blue-300
      background: '#000000',
      text: '#F3F4F6', // gray-100
      accent: '#3B82F6', // blue-500
      sphere: {
        color: '#FFFFFF',
        opacity: 0.6,
        emissive: '#FFFFFF',
        emissiveIntensity: 0.2
      }
    }
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check system preference if no saved theme
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light;
    }
    return savedTheme === 'dark' ? themes.dark : themes.light;
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme.name);
    // Update document class for Tailwind dark mode
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