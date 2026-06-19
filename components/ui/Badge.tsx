// components/ui/Badge.tsx
// Badge/HistoryMilestone — date anchor for the About page timeline.
// Per design-system.md §5: pill/square, primary gold bg, dark text, radius-sm.

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function BadgeHistoryMilestone({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-primary text-text-on-gold text-label font-body font-semibold tracking-[0.04em] px-3 py-1 rounded-sm whitespace-pre-line text-center ${className}`}
    >
      {children}
    </span>
  );
}

export default BadgeHistoryMilestone;
