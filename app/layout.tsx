import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

// Libre Franklin is the open-source cut of Franklin Gothic. If you have the
// licensed "Franklin Gothic ATF" files used on icecreamvanspares.co.uk, drop
// them into /public/fonts (see globals.css) and they will be used first.
const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gelmatic UK | Official UK Partner, Distributor & Spares Supplier",
  description:
    "Official UK distributor of Gelmatic Italy soft serve ice cream machines. Express blending technology, genuine parts, fast UK delivery and expert advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={franklin.variable}>
      <body>{children}</body>
    </html>
  );
}
