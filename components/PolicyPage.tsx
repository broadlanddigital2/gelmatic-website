import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function PolicyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="policy">
        <div className="container">
          <article className="policy__body">
            <h1 className="heading">{title}</h1>
            <p className="policy__updated">Last updated: {updated}</p>
            {children}
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
