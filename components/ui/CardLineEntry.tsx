// components/ui/CardLineEntry.tsx
import type { LineEntry } from '@/lib/constants';

interface CardLineEntryProps {
  line: LineEntry;
  index: number;
}

export default function CardLineEntry({ line, index }: CardLineEntryProps) {
  return (
    <article
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 shadow-xl"
      aria-label={`Line: ${line.lineName}, ${line.semester}`}
    >
      <p className="text-eyebrow text-primary mb-2 tracking-widest">{line.semester}</p>
      <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-white leading-snug mb-4">
        &ldquo;{line.lineName}&rdquo;
      </h3>
      {line.narrative && (
        <p className="text-body-sm text-white/70 italic mb-4 leading-relaxed border-l-2 border-primary/60 pl-3">
          {line.narrative}
        </p>
      )}
      <ul className="flex flex-wrap gap-2" aria-label={`Members of ${line.lineName}`}>
        {line.members.map((member, idx) => (
          <li key={idx}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/25 text-body-sm text-white/90 font-body">
              {member}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
