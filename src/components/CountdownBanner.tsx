import { useTheme } from "../hooks/useTheme";
import { useCountdown } from "../hooks/useCountdown";
import { useLocalStorageString } from "../hooks/useLocalStorage";

interface CountdownBannerProps {
  onBack?: () => void;
  planId: string;
}

export function CountdownBanner({ onBack, planId }: CountdownBannerProps) {
  const [examDate] = useLocalStorageString(`examDate-${planId}`, "");
  const countdownText = useCountdown(examDate);
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <div
      id="countdown-banner"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "10px 0",
        minHeight: "60px",
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          className="btn"
          style={{
            position: "absolute",
            left: "10px",
            padding: "5px 10px",
            fontSize: "1.5rem",
            background: "transparent",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          &lt;
        </button>
      )}
      <span
        id="countdown-text"
        style={{
          padding: "0 60px",
          textAlign: "center",
          wordBreak: "break-word",
          maxWidth: "100%",
          fontSize: "clamp(0.9rem, 4vw, 1.5rem)",
          lineHeight: "1.3",
        }}
      >
        {countdownText}
      </span>
      <span
        id="theme-toggle"
        onClick={toggleTheme}
        style={{
          position: "absolute",
          right: "10px",
          cursor: "pointer",
          fontSize: "1.5rem",
          zIndex: 10,
        }}
      >
        {isDarkMode ? "🌜" : "🌞"}
      </span>
    </div>
  );
}
