import { useTheme } from '../hooks/useTheme';
import { useCountdown } from '../hooks/useCountdown';
import { useLocalStorageString } from '../hooks/useLocalStorage';

interface CountdownBannerProps {
  onBack?: () => void;
  planId: string;
}

export function CountdownBanner({ onBack, planId }: CountdownBannerProps) {
  const [examDate] = useLocalStorageString(`examDate-${planId}`, '');
  const countdownText = useCountdown(examDate);
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <div id="countdown-banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {onBack && (
        <button
          onClick={onBack}
          className="btn"
          style={{
            position: 'absolute',
            left: '10px',
            padding: '5px 10px',
            fontSize: '1.5rem',
            background: 'transparent',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          &lt;
        </button>
      )}
      <span id="countdown-text">{countdownText}</span>
      <span id="theme-toggle" onClick={toggleTheme} style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}>
        {isDarkMode ? '🌜' : '🌞'}
      </span>
    </div>
  );
}
