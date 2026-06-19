'use client';

// components/ui/InterestForm.tsx
// Form/InterestForm — per design-system.md §5 and contact-and-join.md §Interest Form.
// Uses React Hook Form for validation. Submission is stubbed with a mock handler.
// TODO: [NEEDS CLIENT INPUT] — Wire form submission to real email service or CRM endpoint.

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  graduationYear: string;
  hearAbout: string;
  message: string;
}

const CURRENT_YEAR = new Date().getFullYear();
const GRAD_YEARS = Array.from({ length: 6 }, (_, i) => String(CURRENT_YEAR + i));

const HEAR_ABOUT_OPTIONS = [
  'Word of mouth',
  'Social media (Instagram)',
  'Social media (Facebook)',
  'UAB campus event',
  'Internet search',
  'Referred by a current/former member',
  'Other',
];

function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-1" role="alert">
      <AlertCircle size={14} className="text-error shrink-0" aria-hidden="true" />
      <p className="text-caption text-error">{message}</p>
    </div>
  );
}

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  // STUB: mock form submission handler.
  // TODO: [NEEDS CLIENT INPUT] — Replace with real form submission (e.g., email service API call).
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedName(data.firstName);
    setSubmitted(true);
    setIsLoading(false);
  };

  const inputBase =
    'w-full min-h-[44px] px-3 py-2 border border-border rounded-sm text-body font-body text-text bg-surface-alt transition-colors duration-150 focus:outline-none focus:border-primary focus:ring-0 hover:border-text placeholder:text-text-attribution';

  const labelBase = 'block text-label font-body font-medium text-text mb-1';

  if (submitted) {
    return (
      <div
        className="bg-surface-alt rounded-lg shadow-modal p-8 md:p-16 flex flex-col items-center gap-4 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={48} className="text-success" aria-hidden="true" />
        <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text">
          Thank you, {submittedName}.
        </h3>
        <p className="text-body text-text-muted max-w-sm">
          A Kappa Delta Chapter representative will be in touch with you soon.{' '}
          {/* TODO: [NEEDS CLIENT INPUT] — Add exact response time (e.g., "within 48 hours"). */}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-alt rounded-lg shadow-modal p-6 md:p-16">
      <p className="text-body text-text-muted mb-6">
        Fill out the form below and a chapter representative will be in touch with you shortly.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

        {/* Name row — 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelBase}>
              First Name <span className="text-error" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              className={`${inputBase} ${errors.firstName ? 'border-error' : ''}`}
              {...register('firstName', { required: 'First name is required.' })}
            />
            {errors.firstName && (
              <div id="firstName-error">
                <FieldError message={errors.firstName.message ?? 'Required.'} />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className={labelBase}>
              Last Name <span className="text-error" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              className={`${inputBase} ${errors.lastName ? 'border-error' : ''}`}
              {...register('lastName', { required: 'Last name is required.' })}
            />
            {errors.lastName && (
              <div id="lastName-error">
                <FieldError message={errors.lastName.message ?? 'Required.'} />
              </div>
            )}
          </div>
        </div>

        {/* UAB Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            UAB Email Address <span className="text-error" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={`email-helper${errors.email ? ' email-error' : ''}`}
            className={`${inputBase} ${errors.email ? 'border-error' : ''}`}
            {...register('email', {
              required: 'Email address is required.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            })}
          />
          <p id="email-helper" className="text-caption text-text-muted mt-1">
            Please use your UAB email address if you have one.
          </p>
          {errors.email && (
            <div id="email-error">
              <FieldError message={errors.email.message ?? 'Required.'} />
            </div>
          )}
        </div>

        {/* Expected Graduation Year */}
        <div>
          <label htmlFor="graduationYear" className={labelBase}>
            Expected Graduation Year <span className="text-error" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            id="graduationYear"
            aria-required="true"
            aria-invalid={!!errors.graduationYear}
            aria-describedby={errors.graduationYear ? 'gradYear-error' : undefined}
            className={`${inputBase} ${errors.graduationYear ? 'border-error' : ''}`}
            {...register('graduationYear', { required: 'Please select your expected graduation year.' })}
          >
            <option value="">Select...</option>
            {GRAD_YEARS.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.graduationYear && (
            <div id="gradYear-error">
              <FieldError message={errors.graduationYear.message ?? 'Required.'} />
            </div>
          )}
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="hearAbout" className={labelBase}>
            How did you hear about Kappa Delta?
          </label>
          <select
            id="hearAbout"
            className={inputBase}
            {...register('hearAbout')}
          >
            <option value="">Select...</option>
            {HEAR_ABOUT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelBase}>
            Message <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            style={{ minHeight: '120px', resize: 'vertical' }}
            placeholder="Any questions or anything you'd like us to know?"
            aria-describedby="message-hint"
            className={`${inputBase}`}
            {...register('message')}
          />
          <p id="message-hint" className="sr-only">Optional. Share any questions or information you want the chapter to know.</p>
        </div>

        {/* Submit */}
        <div className="flex justify-end mt-2">
          <Button
            as="button"
            type="submit"
            variant="primary"
            disabled={isLoading}
            fullWidth
            className="md:w-auto"
          >
            {isLoading ? 'Sending...' : 'Express Interest'}
          </Button>
        </div>
      </form>
    </div>
  );
}
