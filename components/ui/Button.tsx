// components/ui/Button.tsx
// Button variants: Primary, Secondary, Ghost — per design-system.md §5 component inventory.
// All variants meet 44×44px minimum touch target.
// Focus ring is handled via CSS (globals.css *:focus-visible) — no JS event handlers.

import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  /** Inverted primary: dark bg, light text — used on gold-background CTA bands. */
  inverted?: boolean;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: 'link';
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function getClasses(variant: ButtonVariant, inverted: boolean, fullWidth: boolean, disabled: boolean, extra?: string): string {
  const base = `inline-flex items-center justify-center min-h-[44px] px-5 rounded-md text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 ${
    fullWidth ? 'w-full' : ''
  } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${extra ?? ''}`;

  if (variant === 'primary') {
    if (inverted) {
      return `${base} bg-brand-dark text-text-on-dark border-2 border-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 ${
        disabled
          ? 'bg-border text-text-muted border-border'
          : 'hover:bg-brand-dark-hover hover:border-brand-dark-hover active:scale-[0.97]'
      }`;
    }
    return `${base} bg-primary text-text-on-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
      disabled
        ? 'bg-border text-text-muted'
        : 'hover:bg-primary-hover hover:shadow-card active:scale-[0.97]'
    }`;
  }

  if (variant === 'secondary') {
    return `${base} bg-transparent border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
      disabled
        ? 'border-border text-text-muted'
        : 'border-text-on-dark text-text-on-dark hover:bg-text-on-dark hover:text-brand-dark active:scale-[0.97]'
    }`;
  }

  // Ghost
  return `${base} bg-transparent border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
    disabled
      ? 'text-text-muted'
      : 'text-brand-dark hover:text-primary-hover hover:underline active:text-primary'
  }`;
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    children,
    disabled = false,
    className = '',
    fullWidth = false,
    inverted = false,
  } = props;

  const classes = getClasses(variant, inverted, fullWidth, disabled, className);

  if (props.as === 'link') {
    return (
      <Link
        href={props.href}
        className={classes}
        aria-disabled={disabled}
        {...(disabled ? { tabIndex: -1 } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={disabled}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
