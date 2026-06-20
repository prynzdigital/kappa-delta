// components/ui/CardLineEntry.tsx
import type { LineEntry } from '@/lib/constants';

interface CardLineEntryProps {
  line: LineEntry;
  index: number;
}

const CIRCLE_GRADIENTS = [
  'from-amber-400 to-yellow-300',
  'from-orange-500 to-amber-400',
  'from-pink-500 to-rose-400',
  'from-violet-600 to-purple-400',
  'from-teal-500 to-cyan-400',
];

export default function CardLineEntry({ line, index }: CardLineEntryProps) {
  const isLeft = index % 2 !== 0;
  const gradient = CIRCLE_GRADIENTS[index % CIRCLE_GRADIENTS.length];

  const cardContent = (
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

  const circle = (
    <div
      className={`shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl z-10 ring-2 ring-white/25`}
      aria-hidden="true"
    >
      <span className="font-display font-bold text-white text-xl md:text-2xl leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );

  return (
    <>
      {/* Mobile: left spine + card */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center gap-2 pt-1">
          {circle}
        </div>
        <div className="flex-1 min-w-0">{cardContent}</div>
      </div>

      {/* Desktop: alternating left / right */}
      <div className="hidden md:grid md:grid-cols-[1fr_88px_1fr] items-center gap-6">
        <div>{isLeft ? cardContent : null}</div>
        <div className="flex justify-center">{circle}</div>
        <div>{!isLeft ? cardContent : null}</div>
      </div>
    </>
  );
}
