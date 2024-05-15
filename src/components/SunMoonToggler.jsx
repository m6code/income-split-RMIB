import { SunMoonSvg } from "./SunMoonSvg.jsx";

export function SunMoonToggler() {
  return (
    <button
      aria-label="auto"
      aria-live="polite"
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
    >
      <SunMoonSvg />
    </button>
  );
}
