/**
 * Gelmatic swirl, drawn from /public/images/gelmatic-swirl.png used as a mask,
 * so it takes the current text colour (black logo, light grey background swirls).
 */
export function GelmaticMark({ className = "" }: { className?: string }) {
  return <span className={`gm-swirl ${className}`.trim()} aria-hidden="true" />;
}

/** Long thin arrow used inside the green buttons. */
export function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 44 16"
      width="44"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M2 8h39M34 2l7 6-7 6" />
    </svg>
  );
}

/** Envelope icon: used for the email link on phones, where the full address doesn't fit. */
export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}
