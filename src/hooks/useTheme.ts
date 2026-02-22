import { useEffect } from 'react';
import { useLocalStorageString } from './useLocalStorage';

export function useTheme(): [boolean, () => void] {
  const [theme, setTheme] = useLocalStorageString('theme', 'light');
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    // Set daisyUI theme via data-theme attribute
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    // Keep dark-mode class for backward compatibility with existing CSS
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return [isDarkMode, toggleTheme];
}
