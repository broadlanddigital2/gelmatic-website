import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { CS_SITE_URL, SALES_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cookies Policy | Gelmatic UK",
  description: "Cookies and similar technologies used on gelmatic.co.uk.",
};

export default function CookiesPolicy() {
  return (
    <PolicyPage title="Cookies Policy" updated="4 November 2026">
      <p>
        This policy explains how gelmatic.co.uk uses cookies and similar technologies. The short version: this website
        does not set its own cookies, and it does not use analytics, advertising or tracking.
      </p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files a website stores in your browser. They can remember things between visits, keep a
        site secure or track how people use it. Similar technologies, such as local storage, work in much the same way.
      </p>

      <h2>Cookies on this website</h2>
      <p>
        gelmatic.co.uk does not set any cookies or use local storage. There are no analytics, advertising or social
        media tracking tools on the site. The fonts and images are served from this website itself, so loading a page
        does not send your details to font or image providers.
      </p>

      <h3>Security cookies from our hosting provider</h3>
      <p>
        The website is hosted by Cloudflare. If Cloudflare&rsquo;s security systems need to check that traffic is coming
        from a real person rather than an automated bot, it may set a strictly necessary cookie. These cookies are used
        only to keep the website secure, they do not track you across other websites, and the law does not require
        consent for them.
      </p>
      <div className="policy__table">
        <table>
          <thead>
            <tr>
              <th scope="col">Cookie</th>
              <th scope="col">Set by</th>
              <th scope="col">Purpose</th>
              <th scope="col">How long</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__cf_bm</td>
              <td>Cloudflare</td>
              <td>Tells genuine visitors apart from automated bot traffic, to protect the website</td>
              <td>30 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Links to other websites</h2>
      <p>
        When you follow a link to buy machines or parts on our online shop at{" "}
        <a href={CS_SITE_URL}>icecreamvanspares.co.uk</a>, or to Instagram or Google Maps, those websites set their own
        cookies. Their own cookie policies explain what they use.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser&rsquo;s settings. Because this website does not rely on its own
        cookies, it will still work if you block them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we ever add cookies that are not strictly necessary, such as analytics, we will update this policy and ask
        for your consent before setting them.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about cookies on this website, email{" "}
        <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>. Our <Link href="/privacy-policy">Privacy Policy</Link>{" "}
        explains how we handle personal information.
      </p>
    </PolicyPage>
  );
}
