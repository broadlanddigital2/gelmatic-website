import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { ADDRESS, CS_SITE_URL, SALES_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy | Gelmatic UK",
  description: "How gelmatic.co.uk handles your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" updated="4 November 2026">
      <p>
        This policy explains what personal information is collected when you visit gelmatic.co.uk or contact us, how
        it is used, and the rights you have over it.
      </p>

      <h2>Who we are</h2>
      <p>
        gelmatic.co.uk is run by CS Conversions Ltd, the official UK partner, distributor and spares supplier for
        Gelmatic ice cream machines, of {ADDRESS} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). We are responsible for the
        personal information described in this policy. You can contact us about it at{" "}
        <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>.
      </p>

      <h2>What we collect</h2>
      <h3>When you visit this website</h3>
      <p>
        This website is for information only. It has no forms, no user accounts and no analytics, advertising or
        tracking tools, and we do not ask you for any personal information.
      </p>
      <p>
        The website is hosted by Cloudflare. To deliver pages to you and protect the site against attacks, Cloudflare
        processes technical information sent by your browser, such as your IP address, browser and device type, the
        page you asked for and the time of the request. This is kept in short-term server logs for security and to fix
        problems. We do not use it to identify you.
      </p>
      <h3>When you email us</h3>
      <p>
        If you email us, we receive your name, email address and anything you include in your message, for example
        your business details or the machine you&rsquo;re interested in. We use this to reply to you, to advise on
        machines and parts, and to deal with any quote or order that follows.
      </p>

      <h2>Our lawful basis</h2>
      <ul>
        <li>
          <strong>Legitimate interests:</strong> running and securing this website, and answering enquiries sent to us.
        </li>
        <li>
          <strong>Steps before a contract:</strong> when you ask about buying a machine or parts, we use your details to
          provide information and quotes you have requested.
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We do not sell your personal information. We only share it with:</p>
      <ul>
        <li>Cloudflare, which hosts and protects this website;</li>
        <li>our email provider, which delivers and stores our email; and</li>
        <li>anyone we are required to share it with by law.</li>
      </ul>
      <p>
        Gelmatic machines and parts are sold through our online shop at{" "}
        <a href={CS_SITE_URL}>icecreamvanspares.co.uk</a>. When you follow a link to buy, that website&rsquo;s own
        privacy policy applies. Links to Instagram and Google Maps are also covered by those companies&rsquo; own
        policies.
      </p>

      <h2>International transfers</h2>
      <p>
        Cloudflare runs a global network, so technical information about your visit may be processed outside the UK.
        Where that happens, it is protected by safeguards recognised under UK data protection law.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Server logs are kept for a short period and then deleted automatically. Emails are kept for as long as we need
        them to deal with your enquiry, and for any longer period the law requires, for example for records of an order.
      </p>

      <h2>Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>ask for a copy of the personal information we hold about you;</li>
        <li>ask us to correct information that is wrong or incomplete;</li>
        <li>ask us to delete your information;</li>
        <li>ask us to limit how we use it, or object to our using it; and</li>
        <li>ask us to send your information to another organisation.</li>
      </ul>
      <p>
        To use any of these rights, email <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>. If you&rsquo;re unhappy
        with how we have handled your information, you can complain to the Information Commissioner&rsquo;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a> or on 0303 123 1113.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not set its own cookies. See our <Link href="/cookies-policy">Cookies Policy</Link> for
        details.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how we handle personal information, for example by adding a contact form, we will update this
        page and the date at the top.
      </p>
    </PolicyPage>
  );
}
