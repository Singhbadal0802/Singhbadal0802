"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

/**
 * ContactUs
 * -----------------------------------------------------------------------
 * Drop-in contact section for the portfolio. Reads all color from the
 * global CSS variables defined in :root (see globals.css):
 *
 *   --background     page background
 *   --foreground     used as button text (dark, near-black)
 *   --brand-primary  sage accent (#ccd5ae) — the one strong color moment
 *   --secondary      muted borders / dots
 *   --text-primary   primary copy
 *   --text-secondary muted copy / labels
 *
 * No external icon library required — icons are inline SVG so this file
 * has zero extra dependencies. Swap the icon paths or wire the icons.tsx
 * pattern from your About page refactor if you'd rather centralize them.
 *
 * Usage:
 *   <ContactUs email="you@domain.dev" available socials={[...]} />
 */

type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "mail";
};

type ContactUsProps = {
  email?: string;
  timezone?: string;
  available?: boolean;
  socials?: SocialLink[];
  /** Called on successful validation instead of the built-in fake submit.
   *  Wire this to your API route (e.g. POST /api/contact) and throw on failure. */
  onSubmit?: (values: FormValues) => Promise<void>;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const DEFAULT_SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Singhbadal0802", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/badal-singh-a32715354", icon: "linkedin" },
  { label: "X", href: "https://x.com/yourusername", icon: "x" },
];

const EMPTY_FORM: FormValues = { name: "", email: "", subject: "", message: "" };

export default function ContactUs({
  email = "hello@yourname.dev",
  timezone = "IST, UTC+5:30",
  available = true,
  socials = DEFAULT_SOCIALS,
  onSubmit,
}: ContactUsProps) {
  const [form, setForm] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "That doesn't look like a valid email.";
    }
    if (values.message.trim().length < 10) {
      next.message = "A few more words would help me understand.";
    }
    return next;
  }

  function handleChange(field: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        // Placeholder: replace with a real request, e.g.
        // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-[var(--background)] px-6 py-20 text-[var(--text-primary)] sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Left: intro + status + direct contact */}
        <div className="flex flex-col justify-between">
          <div className="bg-linear-to-r from-brand-primary to-white p-8 rounded-xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--text-secondary)]">
              CONTACT
            </span>

            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              Let&apos;s build
              <br />
              something good.
            </h2>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Have a project in mind, a role to fill, or just want to talk
              through an idea? My inbox is open.
            </p>

            {/* Signature element: live-feeling availability status */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--secondary)]/30 px-4 py-2">
              <span className="relative flex h-2 w-2">
                {available && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-75 motion-reduce:hidden" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    available ? "bg-[var(--brand-primary)]" : "bg-[var(--secondary)]"
                  }`}
                />
              </span>
              <span className="text-xs font-medium text-[var(--text-primary)]">
                {available ? "Available for freelance work" : "Not currently available"}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">· {timezone}</span>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-baseline gap-2 text-xl font-medium underline decoration-[var(--brand-primary)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--secondary)] sm:text-2xl"
            >
              {email}
              <span
                aria-hidden
                className="inline-block text-[var(--brand-primary)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <ul className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--secondary)]/30 text-[var(--text-primary)] transition-colors hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/20"
                  >
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form card */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--secondary)]/20 p-6 shadow-sm sm:p-8">
          <span
            aria-hidden
            className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-[var(--brand-primary)]"
          />

          {status === "sent" ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)]/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Message sent.</h3>
              <p className="mt-2 max-w-xs text-sm text-[var(--text-secondary)]">
                Thanks for reaching out — I&apos;ll get back to you within a day or two.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium underline decoration-[var(--brand-primary)] underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              <Field label="FROM" htmlFor="contact-name" error={errors.name}>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClasses(Boolean(errors.name))}
                />
              </Field>

              <Field label="EMAIL" htmlFor="contact-email" error={errors.email}>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClasses(Boolean(errors.email))}
                />
              </Field>

              <Field label="REGARDING" htmlFor="contact-subject">
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project, role, collaboration..."
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className={inputClasses(false)}
                />
              </Field>

              <Field label="MESSAGE" htmlFor="contact-message" error={errors.message}>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="What are you working on?"
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`${inputClasses(Boolean(errors.message))} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <span aria-hidden>→</span>}
              </button>

              {status === "error" && (
                <p role="alert" className="text-sm text-[var(--text-secondary)]">
                  Something went wrong. Try again, or email me directly at {email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full border-0 border-b bg-transparent py-2 text-[15px]",
    "text-[var(--text-primary)] placeholder:text-[var(--secondary)]",
    "focus:outline-none focus:ring-0 transition-colors",
    hasError ? "border-red-400" : "border-[var(--secondary)]/30 focus:border-[var(--brand-primary)]",
  ].join(" ");
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[11px] font-semibold tracking-[0.15em] text-[var(--text-secondary)]"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function Icon({ name }: { name: SocialLink["icon"] }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" } as const;

  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18.24 2.5h3.32l-7.26 8.3 8.54 10.7h-6.69l-5.24-6.7-6 6.7H1.6l7.76-8.87L1.2 2.5h6.86l4.74 6.13 5.44-6.13Zm-1.17 17.02h1.84L7.02 4.38H5.05l12.02 15.14Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M3 6h18v12H3z" strokeLinejoin="round" />
          <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}