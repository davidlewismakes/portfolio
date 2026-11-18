import { CONTACT, type Recommendation as RecommendationData } from "@/lib/content";

export function Recommendation({ recommendation }: { recommendation: RecommendationData }) {
  return (
    <figure className="max-w-[36rem] border-l border-rule pl-4">
      <blockquote className="text-lg leading-relaxed">
        <p>“{recommendation.quote}”</p>
      </blockquote>
      <figcaption className="mt-2 font-display text-sm text-muted">
        <a href={`${CONTACT.linkedin}details/recommendations/`} className="underline decoration-muted/40 underline-offset-4 hover:text-foreground">
          {recommendation.author}
        </a>
        <span className="mt-0.5 block">{recommendation.relationship} · {recommendation.year}</span>
      </figcaption>
    </figure>
  );
}
