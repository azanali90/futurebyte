import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { ARTICLES, byDate, type Article } from "@/lib/articles";
import type { ReactNode } from "react";
import { CATEGORIES } from "@/lib/site";

export default function Home() {
  const featured = ARTICLES.filter((a) => a.featured);
  const popular = ARTICLES.filter(
    (a) => a.popular && a.category === "ai-tools"
  );

  return (
    <>
      {/* Banner Ad - Below Header */}
      <AdSlot />

      {/* Hero Section */}
      <section className="glow-hero bg-navy text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="hero-eyebrow">
            <span aria-hidden="true" />
            Your next discovery starts here
          </p>

          <h1 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Discover the Future of{" "}
            <span className="hero-highlight">Technology.</span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-300">
            Clear guides on AI, software and digital tools, written to help you
            choose well and work better.
          </p>

          <form
            action="/search"
            className="hero-search mt-8 flex max-w-xl gap-2"
          >
            <input
              name="q"
              type="search"
              required
              placeholder="Search articles"
              aria-label="Search articles"
              className="min-w-0 flex-1 rounded-lg px-4 py-3 text-slate-900"
            />

            <button className="glow-button rounded-lg bg-sky px-5 font-semibold">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Featured articles">
          <Grid items={featured} />
        </Section>

        <Section title="Latest posts">
          <Grid items={byDate().slice(0, 6)} />
        </Section>

        {popular.length > 0 && (
          <Section title="Popular AI tools">
            <Grid items={popular} />
          </Section>
        )}

        <Section title="Browse categories">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="category-card rounded-xl border border-slate-200 p-5 hover:border-sky"
              >
                <h3 className="font-display font-bold text-navy">
                  {c.name}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {c.blurb}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        <section className="newsletter-panel my-12 rounded-2xl bg-navy-100 p-8">
          <h2 className="font-display text-2xl font-bold text-navy">
            Newsletter
          </h2>

          <p className="mt-2 text-slate-700">
            Newsletter signup opens soon. In the meantime, explore our latest
            guides on AI, technology and smarter digital work.
          </p>
        </section>
      </div>
    </>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mt-12">
    <h2 className="section-heading mb-5 font-display text-2xl font-bold text-navy">
      {title}
    </h2>
    {children}
  </section>
);

const Grid = ({ items }: { items: Article[] }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((a) => (
      <ArticleCard key={a.slug} a={a} />
    ))}
  </div>
);
