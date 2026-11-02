import { Landing } from "@/components/Landing";
import type { Locale } from "@/lib/site";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <Landing lang={lang as Locale} />;
}
