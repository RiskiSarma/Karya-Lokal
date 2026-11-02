import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { dict } from "@/lib/i18n";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog", alternates: { canonical: "/blog", languages: {} } };

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "id") notFound();
  const t = dict.id;
  return (
    <>
      <Header t={t} lang="id" p="/" />
      <main id="top">
        <section>
          <div className="wrap">
            <div className="tag">{t.blog.tag}</div>
            <h1 className="page-h">{t.blog.h2}</h1>
            <p className="sub">{t.blog.sub}</p>
            <div className="grid2">
              {posts.map((p) => (
                <a className="card" href={`/blog/${p.slug}`} key={p.slug}>
                  <span className="by">{p.read}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
