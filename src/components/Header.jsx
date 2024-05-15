export function Header() {
  return (
    <header>
      <h1>Splits</h1>
      <button
        aria-label="auto"
        aria-live="polite"
        className="theme-toggle"
        id="theme-toggle"
        title="Toggles light & dark"
      >
        <svg
          aria-hidden="true"
          className="sun-and-moon"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <mask className="moon" id="moon-mask">
            <rect fill="white" height="100%" width="100%" x="0" y="0" />
            <circle cx="24" cy="10" fill="black" r="6" />
          </mask>
          <circle
            className="sun"
            cx="12"
            cy="12"
            fill="currentColor"
            mask="url(#moon-mask)"
            r="6"
          />
          <g className="sun-beams" stroke="currentColor">
            <line x1="12" x2="12" y1="1" y2="3" />
            <line x1="12" x2="12" y1="21" y2="23" />
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
            <line x1="1" x2="3" y1="12" y2="12" />
            <line x1="21" x2="23" y1="12" y2="12" />
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
          </g>
        </svg>
      </button>
    </header>
  );
}
