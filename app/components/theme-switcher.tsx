type ThemeSwitcherProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeSwitcher({ isDark, onToggle }: ThemeSwitcherProps) {
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      className={`theme-switcher ${isDark ? "theme-switcher-dark" : ""}`}
    >
      <span aria-hidden="true">{isDark ? "☼" : "◐"}</span>
    </button>
  );
}
