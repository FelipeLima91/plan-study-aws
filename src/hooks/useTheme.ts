import { useState, useEffect } from 'react';
import { useLocalStorageString } from './useLocalStorage';

export function useTheme(): [boolean, () => void] {
  const [theme, setTheme] = useLocalStorageString('theme', 'light');
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
    // Set daisyUI theme via data-theme attribute
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    // Keep dark-mode class for backward compatibility with existing CSS
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return [isDarkMode, toggleTheme];
}
