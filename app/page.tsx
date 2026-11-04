import Image from "next/image";
import Link from "next/link";
import { Arrow, GelmaticMark, MailIcon } from "@/components/Icons";
import SiteFooter from "@/components/SiteFooter";

const MACHINES_URL = "https://icecreamvanspares.co.uk/gelmatic-machines";
const PARTS_URL = "https://icecreamvanspares.co.uk/shop/gelmatic-machine-parts.html";
// Pronto-Matic Direct Drive: the product isn't listed yet (trademark pending), so this card
// points at the HC Easy 1 PM page for now. Swap in the Pronto-Matic product URL once it's live.
const PRONTO_MATIC_URL = "https://icecreamvanspares.co.uk/gelmatic-machines/gelmatic-electric-hc-easy-1-pm-machine";

const features = [
  { icon: "/images/icon-star.png", title: "Premium Quality", text: "Built in Italy, designed for professionals" },
  { icon: "/images/icon-snowflake.png", title: "Consistent Results", text: "Perfect texture and taste every time" },
  { icon: "/images/icon-sprout.png", title: "Energy Efficient", text: "Lower running costs, greener operation" },
  { icon: "/images/icon-gear-outline.png", title: "Simple Maintenance", text: "Easy service and cleaning access" },
];

const machines = [
  {
    name: "e-Pronto Electric Van Machine",
    image: "/images/e-pronto.jpg",
    width: 248,
    height: 382,
    href: "https://icecreamvanspares.co.uk/gelmatic-machines/gelmatic-e-pronto-electric-van-machine",
  },
  {
    name: "Pronto - Matic Direct Drive Machine",
    image: "/images/pronto-matic.webp",
    width: 700,
    height: 1050,
    href: PRONTO_MATIC_URL,
  },
  {
    name: "Pronto Electric Machine",
    image: "/images/pronto-electric.webp",
    width: 700,
    height: 1050,
    href: "https://icecreamvanspares.co.uk/gelmatic-machines/gelmatic-pronto-electric-machine",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="check">
      <Image src="/images/icon-check.png" alt="" width={22} height={22} />
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------------- Header ---------------- */}
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="logo" aria-label="Gelmatic UK home">
            <GelmaticMark className="logo__mark" />
            <span className="logo__word">
              GELMATIC<span className="logo__tld">.CO.UK</span>
            </span>
          </Link>

          <div className="site-header__contact">
            <a className="site-header__email" href="mailto:sales@gelmatic.co.uk">
              sales@gelmatic.co.uk
            </a>
            <a className="site-header__mail-icon" href="mailto:sales@gelmatic.co.uk" aria-label="Email sales@gelmatic.co.uk">
              <MailIcon />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Gelmatic UK on Instagram">
              <Image src="/images/icon-instagram.png" alt="" width={44} height={44} className="instagram" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="hero">
          {/* Text half lines up with the 1400px container; the image half runs to the page edge */}
          <div className="hero__content">
            <div className="hero__inner">
              <GelmaticMark className="swirl" />
              <div className="hero__text">
                <h1 className="heading">Gelmatic - An Investment to Enhance Your Business</h1>
                <p className="copy">
                  High performing, reliable and innovative - Gelmatic are leading the way in the world of ice cream,
                  specialising in express blending technology while maintaining guaranteed high quality.
                </p>
                <p className="copy">
                  With Italian craftsmanship, specialised engineering and rapid, consistent performance, Gelmatic ice
                  cream machines are the investment you need for your business.
                </p>
                <a href={MACHINES_URL} className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <Image
              src="/images/hero-machine.jpg"
              alt="Gelmatic soft serve machine with its touchscreen control panel"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* ---------------- Feature strip ---------------- */}
        <section className="features" aria-label="Why Gelmatic">
          <ul className="features__grid">
            {features.map(({ icon, title, text }) => (
              <li key={title} className="feature">
                <Image src={icon} alt="" width={56} height={56} className="feature__icon" />
                <h2 className="feature__title">{title}</h2>
                <p className="feature__text">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- Machines ---------------- */}
        <section className="machines">
          <div className="container machines__inner">
            <div className="machines__intro">
              <h2 className="heading">Choose the Right Gelmatic Machine for You</h2>
              <p className="copy">
                Official UK distributor working directly with Gelmatic Italy, spearheading the future of ice cream
                machines, specialising in the latest express blending technology.
              </p>
              <p className="copy">
                Offering a range of high standard, dependent machines perfect for any retail / business venture.
              </p>
              <a href={MACHINES_URL} className="btn btn--compact">
                Explore Our Machines <Arrow direction="right" />
              </a>
            </div>

            <ul className="machines__list">
              {machines.map((m) => (
                <li key={m.name}>
                  <a href={m.href} className="machine-card">
                    <div className="machine-card__frame">
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={m.width}
                        height={m.height}
                        sizes="(max-width: 640px) 45vw, 260px"
                      />
                    </div>
                    <h3 className="machine-card__name">{m.name}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- Parts ---------------- */}
        <section className="parts">
          <div className="container parts__inner">
            <div className="parts__card">
              <Image
                src="/images/parts.webp"
                alt="Genuine Gelmatic spare parts: gears, drive shaft, tap handle, capacitor and seals"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
              />
              <div className="parts__brand" aria-hidden="true">
                <GelmaticMark />
                <span className="parts__brand-word">
                  GELMATIC<small>.CO.UK</small>
                </span>
              </div>
              <ul className="parts__checks">
                <CheckItem>Genuine Parts</CheckItem>
                <CheckItem>Fast UK Delivery</CheckItem>
                <CheckItem>Expert Advice</CheckItem>
              </ul>
            </div>

            <div className="parts__copy">
              <h2 className="heading parts__heading">
                <span>Gelmatic&rsquo;s Official UK Partner,</span>{" "}
                <span>Distributor and Spares Supplier</span>
              </h2>
              <p className="parts__badge">
                <Image src="/images/icon-gear.png" alt="" width={30} height={30} />
                Wide Range of Parts In Stock
              </p>
              <p className="copy">
                Keep your Gelmatic Machines running at their best with genuine parts, expert advice and fast UK
                delivery
              </p>
              <a href={PARTS_URL} className="btn btn--compact">
                <Arrow direction="left" /> Explore Machine Parts
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Trusted by ---------------- */}
        <section className="trusted">
          <GelmaticMark className="swirl" />
          <div className="container trusted__inner">
            <div className="trusted__copy">
              <h2 className="heading">Trusted by Ice Cream Vans, Busy Parlours and Kiosks Throughout the UK</h2>
              <p className="copy">
                Gelmatic Machines are built to be robust, compact and energy efficient, delivering perfect soft serve
                wherever your customers are.
              </p>
              <p className="copy">
                Before purchasing a Gelmatic machine, we work closely with our customers to ensure they choose the
                right machine for their business, through our expert advice, machine recommendations and our reliable
                technical support whenever it&rsquo;s needed.
              </p>
              <ul className="trusted__checks">
                <CheckItem>Reliable</CheckItem>
                <CheckItem>High Performing</CheckItem>
                <CheckItem>Energy Efficient</CheckItem>
              </ul>
            </div>

            <div className="trusted__media">
              <Image
                src="/images/van.jpg"
                alt="Electric ice cream van fitted with a Gelmatic machine"
                width={845}
                height={482}
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
