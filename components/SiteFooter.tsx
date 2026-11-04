/**
 * Footer matching icecreamvanspares.co.uk: link columns on the left, account and
 * address on the right, then a rule and the policy links.
 */

const BASE = "https://icecreamvanspares.co.uk";

const services = [
  { label: "About Us", href: `${BASE}/about-us` },
  { label: "Online Shop", href: `${BASE}/shop` },
  { label: "Gallery", href: `${BASE}/gallery` },
  { label: "Gelmatic Machines", href: `${BASE}/gelmatic-machines` },
  { label: "Vans For Sale", href: `${BASE}/vans-for-sale` },
  { label: "Electric Ice Cream Vans", href: `${BASE}/electric-ice-cream-vans` },
];

const support = [{ label: "Contact Us", href: `${BASE}/contact-us` }];

const policies = [
  { label: "Terms & Conditions", href: `${BASE}/terms-and-conditions` },
  { label: "Privacy Policy", href: `${BASE}/privacy-policy` },
  { label: "Cookies Policy", href: `${BASE}/cookies-policy` },
  { label: "Returns Policy", href: `${BASE}/returns` },
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
            <h3 className="site-footer__heading">Services</h3>
            <nav className="site-footer__links" aria-label="Services">
              {services.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="site-footer__heading">Support</h3>
            <nav className="site-footer__links" aria-label="Support">
              {support.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="site-footer__contact">
          <a href={`${BASE}/sign-in`}>
            <svg {...iconProps}>
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>My Account</span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=2+Concorde+Rd,+Norwich+NR6+6BW" target="_blank" rel="noopener noreferrer">
            <svg {...iconProps}>
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>2 Concorde Rd, Norwich NR6 6BW</span>
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
          {policies.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
