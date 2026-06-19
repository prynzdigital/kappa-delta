// components/layout/SkipNav.tsx
// Skip navigation link — first focusable element on every page.
// Visually hidden until focused; appears top-left on focus per design-system.md §7.

export default function SkipNav() {
  return (
    <a href="#main-content" className="skip-nav">
      Skip to main content
    </a>
  );
}
