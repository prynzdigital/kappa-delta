// components/ui/CardLineEntry.tsx
import type { LineEntry } from '@/lib/constants';

interface CardLineEntryProps {
  line: LineEntry;
  index: number;
}

export default function CardLineEntry({ line, index }: CardLineEntryProps) {
  return (
    <article
      className="bg-surface-alt border border-border rounded-2xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200"
      aria-label={`Line: ${line.lineName}, ${line.semester}`}
    >
      <p className="text-eyebrow text-primary mb-2 tracking-widest">{line.semester}</p>
      <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text leading-snug mb-4">
        &ldquo;{line.lineName}&rdquo;
      </h3>
      {line.narrative && (
        <p className="text-body-sm text-text-muted italic mb-4 leading-relaxed border-l-2 border-primary pl-3">
          {line.narrative}
        </p>
      )}
      <ul className="flex flex-wrap gap-2" aria-label={`Members of ${line.lineName}`}>
        {line.members.map((member, idx) => (
          <li key={idx}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-body-sm text-text font-body">
              {member}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
