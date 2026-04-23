import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";
import { RESEARCH } from "../data/research";

export default function ResearchDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = RESEARCH.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="px-6 md:px-10 max-w-3xl mx-auto py-24 text-center">
        <h1 className="text-creamy text-3xl uppercase tracking-wider mb-6">Article not found</h1>
        <Link to="/research" className="text-carnelian uppercase tracking-[0.25em] text-xs">
          ← Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 max-w-3xl mx-auto pb-24">
      <Section className="mb-10">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-minimalist hover:text-creamy transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Research
        </Link>
      </Section>

      <Section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-carnelian">{entry.tag}</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-minimalist">{entry.date}</span>
        </div>
        <FirstLetterLarge text={entry.title} className="text-creamy text-4xl md:text-6xl" />
      </Section>

      <Section>
        <article className="space-y-6 text-creamy/85 leading-relaxed text-lg">
          {entry.content.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </Section>
    </div>
  );
}
