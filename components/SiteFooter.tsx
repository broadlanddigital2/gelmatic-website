import Link from "next/link";
import { MailIcon } from "@/components/Icons";
import {
  ADDRESS,
  CS_SITE_URL,
  CS_TERMS_URL,
  E_PRONTO_URL,
  MACHINES_URL,
  MAPS_URL,
  PARTS_URL,
  PRONTO_ELECTRIC_URL,
  PRONTO_MATIC_URL,
  SALES_EMAIL,
} from "@/lib/links";

/**
 * Footer styled like icecreamvanspares.co.uk: link columns on the left, contact
 * details on the right, then a rule and the policy links. Links are Gelmatic-specific.
 */

const machines = [
  { label: "e-Pronto Electric Van Machine", href: E_PRONTO_URL },
  { label: "Coming Soon: Direct Drive Machine", href: PRONTO_MATIC_URL },
  { label: "Pronto Electric Machine", href: PRONTO_ELECTRIC_URL },
  { label: "View All Gelmatic Machines", href: MACHINES_URL },
];

const support = [
  { label: "Gelmatic Machine Parts", href: PARTS_URL },
  { label: "Contact Us", href: `mailto:${SALES_EMAIL}` },
  { label: "CS Conversions", href: CS_SITE_URL },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "site-footer__icon",
};

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__cols">
          <div>
            <h3 className="site-footer__heading">Gelmatic Machines</h3>
            <nav className="site-footer__links" aria-label="Gelmatic machines">
              {machines.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="site-footer__heading">Parts &amp; Support</h3>
            <nav className="site-footer__links" aria-label="Parts and support">
              {support.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="site-footer__contact">
          <a href={`mailto:${SALES_EMAIL}`}>
            <MailIcon className="site-footer__icon" />
            <span>{SALES_EMAIL}</span>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <svg {...iconProps}>
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{ADDRESS}</span>
          </a>
        </div>
      </div>

      <hr className="site-footer__rule" />

      <div className="site-footer__legal">
        <svg {...iconProps} className="site-footer__icon site-footer__legal-icon">
          <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="m14 20 2 2 4-4" />
        </svg>
        <nav className="site-footer__policies" aria-label="Policies">
          {/* Sales are made through CS Conversions, so their terms apply */}
          <a href={CS_TERMS_URL}>Terms &amp; Conditions</a>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookies-policy">Cookies Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
