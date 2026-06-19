// components/ui/CardLineEntry.tsx
// Card/LineEntry component — per design-system.md §5.
// 4px gold left border, used on /lines page.

import type { LineEntry } from '@/lib/constants';

interface CardLineEntryProps {
  line: LineEntry;
}

export default function CardLineEntry({ line }: CardLineEntryProps) {
  return (
    <article
      className="bg-surface-alt rounded-md shadow-card hover:shadow-card-hover transition-shadow duration-200 border-l-4 border-primary overflow-hidden"
      aria-label={`Line: ${line.lineName}, ${line.semester}`}
    >
      <div className="p-6 flex flex-col gap-3">
        {/* Line name */}
        <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text leading-snug">
          {line.lineName}
        </h3>

        {/* Metadata */}
        <div className="flex items-center gap-3 text-label font-body font-medium text-text-muted flex-wrap">
          <span>{line.semester}</span>
          {line.memberCount > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>{line.memberCount} {line.memberCount === 1 ? 'Member' : 'Members'}</span>
            </>
          )}
        </div>

        {/* Member list */}
        {line.members.length > 0 && (
          <ul
            className="text-body-sm text-text leading-relaxed"
            aria-label={`Members of ${line.lineName}`}
          >
            {line.members.map((member, idx) => (
              <li key={idx} className="inline">
                {member}
                {idx < line.members.length - 1 && (
                  <span className="text-text-muted mx-1" aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Narrative / notable context */}
        {line.narrative && (
          <p className="text-body text-text-muted italic mt-1 leading-relaxed">
            &ldquo;{line.narrative}&rdquo;
          </p>
        )}
      </div>
    </article>
  );
}
