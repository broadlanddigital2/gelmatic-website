import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & { weight?: number };

/** Gelmatic "C" swirl mark. Uses currentColor so it can be tinted. */
export function GelmaticMark({ weight = 1, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="butt" aria-hidden="true" {...props}>
      <path d="M80.6 24.3 A40 40 0 1 0 80.6 75.7" strokeWidth={14 * weight} />
      <path d="M70.6 43 A18 18 0 1 0 64 67.6" strokeWidth={9 * weight} />
    </svg>
  );
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
