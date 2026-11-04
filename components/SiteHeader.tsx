import Image from "next/image";
import Link from "next/link";
import { GelmaticMark, MailIcon } from "@/components/Icons";
import { INSTAGRAM_URL, SALES_EMAIL } from "@/lib/links";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo" aria-label="Gelmatic UK home">
          <GelmaticMark className="logo__mark" />
          <span className="logo__word">
            GELMATIC<span className="logo__tld">.CO.UK</span>
          </span>
        </Link>

        <div className="site-header__contact">
          <a className="site-header__email" href={`mailto:${SALES_EMAIL}`}>
            {SALES_EMAIL}
          </a>
          <a className="site-header__mail-icon" href={`mailto:${SALES_EMAIL}`} aria-label={`Email ${SALES_EMAIL}`}>
            <MailIcon />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Gelmatic UK on Instagram">
            <Image src="/images/icon-instagram.png" alt="" width={44} height={44} className="instagram" />
          </a>
        </div>
      </div>
    </header>
  );
}
