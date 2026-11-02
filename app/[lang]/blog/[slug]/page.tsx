import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { dict } from "@/lib/i18n";
import { posts } from "@/lib/posts";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ lang: "id", slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.desc,
    alternates: { canonical: `/blog/${p.slug}`, languages: {} },
    openGraph: { title: p.title, description: p.desc, type: "article", publishedTime: p.date, locale: "id_ID", images: ["/logo.png"] },
  };
}

export default async function Post({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  if (lang !== "id" || !post) notFound();
  const t = dict.id;
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.desc, datePublished: post.date, author: { "@type": "Organization", name: "KARYALOKAL" } };
  return (
    <>
      <Header t={t} lang="id" p="/" />
      <main id="top">
        <article className="wrap post">
          <a className="back" href="/blog">← {t.blog.back}</a>
          <p className="meta">{post.date} · {post.read}</p>
          <h1>{post.title}</h1>
          {post.blocks.map((b, i) =>
            b.t === "h2" ? <h2 key={i}>{b.x}</h2>
            : b.t === "p" ? <p key={i}>{b.x}</p>
            : <ul key={i}>{b.x.map((li) => <li key={li}>{li}</li>)}</ul>
          )}
          <div className="card post-cta">
            <h3>{t.blog.cta}</h3>
            <a className="btn sm" href="/#kontak">{t.blog.ctaBtn} <Icon n="arrow" /></a>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </main>
      <Footer t={t} />
    </>
  );
}
