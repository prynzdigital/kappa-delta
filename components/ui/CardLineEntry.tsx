// components/ui/CardLineEntry.tsx
import type { LineEntry } from '@/lib/constants';

interface CardLineEntryProps {
  line: LineEntry;
  index: number;
}

export default function CardLineEntry({ line, index }: CardLineEntryProps) {
  return (
    <article
      className="rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200"
      aria-label={`Line ${index + 1}: ${line.lineName}, ${line.semester}`}
    >
      {/* Dark header */}
      <div className="bg-brand-dark px-6 py-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-eyebrow text-primary mb-2 tracking-widest">{line.semester}</p>
          <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text-on-dark leading-snug">
            &ldquo;{line.lineName}&rdquo;
          </h3>
        </div>
        {line.memberCount > 0 && (
          <div
            className="shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-h4 font-display font-bold text-text-on-gold mt-1"
            aria-label={`${line.memberCount} ${line.memberCount === 1 ? 'member' : 'members'}`}
          >
            {line.memberCount}
          </div>
        )}
      </div>

      {/* White body */}
      <div className="bg-surface-alt px-6 py-5">
        {line.narrative && (
          <p className="text-body-sm text-text-muted italic mb-4 leading-relaxed border-l-2 border-primary pl-3">
            {line.narrative}
          </p>
        )}
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`Members of ${line.lineName}`}
        >
          {line.members.map((member, idx) => (
            <li key={idx}>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-body-sm font-body text-text">
                {member}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
