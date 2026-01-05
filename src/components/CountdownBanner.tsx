import { useTheme } from '../hooks/useTheme';
import { useCountdown } from '../hooks/useCountdown';
import { useLocalStorageString } from '../hooks/useLocalStorage';

export function CountdownBanner() {
  const [examDate] = useLocalStorageString('examDate', '');
  const countdownText = useCountdown(examDate);
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <div id="countdown-banner">
      <span id="countdown-text">{countdownText}</span>
      <span id="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '🌜' : '🌞'}
      </span>
    </div>
  );
}
