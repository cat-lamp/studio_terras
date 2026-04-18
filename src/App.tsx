import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  ArrowRight,
  Search,
  Sparkles,
  Clock,
  Mail,
  PenTool,
  LineChart,
  Code2,
  Leaf,
  Loader2,
} from "lucide-react";

/**
 * Studio Terras — single-page landing site.
 *
 * Sections in order:
 *   1. Navigation
 *   2. Hero                   — Headline + CTA
 *   3. Value Proposition      — 3-column statistics grid
 *   4. What We Do             — Services
 *   5. Contact                — Minimalist form
 *   6. Footer
 *
 * Styling: Tailwind CSS with a custom "Earth tone" palette defined
 * in tailwind.config.js (cream, sand, terracotta, forest).
 */
export default function App() {
  // Wire up scroll-triggered fade-ins for every element with a `.reveal` class.
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <WhatWeDo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Navigation
 * -------------------------------------------------------------------------*/
function Navigation() {
  return (
    <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur-md border-b border-sand-200/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-500 text-cream transition-transform group-hover:scale-105">
            <Leaf className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-xl tracking-tightest-serif text-forest-700">
            Studio Terras
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm text-ink/70">
          <li>
            <a href="#value" className="hover:text-terracotta transition-colors">
              Why It Matters
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-terracotta transition-colors">
              What We Do
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-terracotta transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-forest-500 px-5 py-2.5 text-sm text-cream hover:bg-forest-700 transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

/* ---------------------------------------------------------------------------
 * Hero
 * -------------------------------------------------------------------------*/
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background glow — subtle warm gradient. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream-100 to-sand-100"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-terracotta/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-forest-100/40 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="max-w-4xl">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-sand-300 bg-cream-100 px-4 py-1.5 text-xs tracking-wider uppercase text-forest-700">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Premium Website Creation
          </p>

          <h1
            id="hero-heading"
            className="reveal mt-8 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tightest-serif text-forest-700"
            style={{ transitionDelay: "80ms" }}
          >
            Digital Architecture
            <br />
            <span className="italic text-terracotta">Rooted</span> in Strategy.
          </h1>

          <p
            className="reveal mt-8 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed"
            style={{ transitionDelay: "160ms" }}
          >
            We design and build high-performance websites that convert visitors
            into customers — marrying refined craft with measurable business
            outcomes.
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm md:text-base font-medium text-cream shadow-sm hover:bg-terracotta-600 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-forest-500/20 px-7 py-3.5 text-sm md:text-base text-forest-700 hover:bg-forest-500 hover:text-cream transition-colors"
            >
              Explore our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
 * Value Proposition — statistics that justify the investment in a great site.
 * -------------------------------------------------------------------------*/
const STATS = [
  {
    icon: Search,
    value: "75%",
    title: "SEO",
    description:
      "of users never scroll past the first page of search results — if you're not there, you don't exist.",
  },
  {
    icon: Sparkles,
    value: "94%",
    title: "First Impressions",
    description:
      "of first impressions are design-related. Elegant craft directly drives sales and trust.",
  },
  {
    icon: Clock,
    value: "0.05s",
    title: "Credibility",
    description:
      "is all it takes for a visitor to form an opinion about your website — and your business.",
  },
] as const;

function ValueProposition() {
  return (
    <section
      id="value"
      className="relative py-24 md:py-32 bg-cream"
      aria-labelledby="value-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="reveal text-xs tracking-[0.22em] uppercase text-terracotta font-medium">
            Why It Matters
          </p>
          <h2
            id="value-heading"
            className="reveal mt-4 font-serif text-4xl md:text-5xl tracking-tightest-serif text-forest-700"
            style={{ transitionDelay: "80ms" }}
          >
            Your web presence is
            <br className="hidden md:block" /> your first handshake.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.title}
                className="reveal group rounded-4xl border border-sand-200 bg-cream-50 p-8 md:p-10 hover:bg-cream-100 hover:border-sand-300 transition-all hover:-translate-y-1"
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-500 text-cream group-hover:bg-terracotta transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-8 font-serif text-5xl md:text-6xl text-terracotta tracking-tightest-serif">
                  {stat.value}
                </p>
                <h3 className="mt-4 font-serif text-xl text-forest-700">
                  {stat.title}
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed text-[15px]">
                  {stat.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
 * What We Do — service list
 * -------------------------------------------------------------------------*/
const SERVICES = [
  {
    icon: PenTool,
    title: "Custom Web Design",
    description:
      "Bespoke, brand-aligned interfaces built from the ground up. No templates — just considered design that elevates your identity.",
  },
  {
    icon: LineChart,
    title: "SEO Optimization",
    description:
      "Technical SEO, content architecture, and performance tuning so your audience finds you — and stays.",
  },
  {
    icon: Code2,
    title: "Technical Strategy",
    description:
      "The right stack, clean code, and a scalable foundation. We pair engineering discipline with strategic thinking.",
  },
] as const;

function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-forest-500 text-cream rounded-t-[2.5rem] md:rounded-t-[4rem]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="reveal text-xs tracking-[0.22em] uppercase text-sand-300 font-medium">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="reveal mt-4 font-serif text-4xl md:text-5xl tracking-tightest-serif text-cream"
            style={{ transitionDelay: "80ms" }}
          >
            Three disciplines.
            <br className="hidden md:block" /> One considered outcome.
          </h2>
          <p
            className="reveal mt-6 text-cream/75 text-lg max-w-xl leading-relaxed"
            style={{ transitionDelay: "140ms" }}
          >
            Every engagement blends strategy, design, and engineering — because
            great websites aren't built, they're composed.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-cream/10 rounded-3xl overflow-hidden md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="reveal bg-forest-500 p-8 md:p-10 hover:bg-forest-700 transition-colors"
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 text-cream">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-8 font-serif text-2xl md:text-3xl text-cream">
                  {service.title}
                </h3>
                <p className="mt-4 text-cream/70 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
 * Contact — minimalist form
 *
 * Submissions are POSTed to a Google Apps Script Web App that appends a row
 * to a Google Sheet. The payload keys (`Name`, `Email`, `ProjectDetails`)
 * match the sheet's column headers exactly.
 *
 * Google Apps Script endpoints don't return CORS headers, so the request is
 * sent with `mode: 'no-cors'`. That means the response is opaque (we can't
 * read status or body), so we treat a non-throwing fetch as success — which
 * is the standard pattern for this setup.
 * -------------------------------------------------------------------------*/
const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzp1EThlzyDyR-o5nRksCDOJeHjd-YFjrD9heiS2brdXdAvSjKBkuFSrNb_6dEAjGqK/exec";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMPTY_FORM = { Name: "", Email: "", ProjectDetails: "" };

function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange =
    (field: keyof typeof EMPTY_FORM) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        // Apps Script's doPost receives text/plain as e.postData.contents.
        // Using text/plain also sidesteps a preflight OPTIONS request.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
    }
  };

  const isSending = status === "sending";
  const isSuccess = status === "success";

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-terracotta font-medium">
            Contact Us
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-serif text-4xl md:text-5xl tracking-tightest-serif text-forest-700"
          >
            Let's build something
            <span className="italic text-terracotta"> enduring.</span>
          </h2>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed">
            Tell us about your project. We'll respond within one business day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal mt-14 rounded-4xl border border-sand-200 bg-cream-50 p-6 md:p-10 shadow-sm"
          style={{ transitionDelay: "120ms" }}
          noValidate
        >
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-500 text-cream">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-forest-700">
                Thank you! We'll reach out soon.
              </h3>
              <p className="mt-3 text-ink/70 max-w-md">
                Your message is on its way to the studio.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm text-terracotta hover:text-terracotta-600 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Name"
                name="Name"
                type="text"
                placeholder="Your full name"
                value={form.Name}
                onChange={handleChange("Name")}
                disabled={isSending}
                required
              />
              <Field
                label="Email"
                name="Email"
                type="email"
                placeholder="you@company.com"
                value={form.Email}
                onChange={handleChange("Email")}
                disabled={isSending}
                required
              />
              <div className="md:col-span-2">
                <Field
                  label="Project Details"
                  name="ProjectDetails"
                  as="textarea"
                  placeholder="Tell us about your goals, timeline, and anything else that matters."
                  value={form.ProjectDetails}
                  onChange={handleChange("ProjectDetails")}
                  disabled={isSending}
                  required
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-sm text-ink/50" role="status" aria-live="polite">
                  {status === "error"
                    ? "Something went wrong — please try again."
                    : "We typically reply within one business day."}
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-sm md:text-base font-medium text-cream shadow-sm hover:bg-terracotta-600 hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-sm disabled:hover:bg-terracotta"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/**
 * A single labeled form field. Switches between <input> and <textarea>
 * via the `as` prop while sharing styling. Controlled via `value` + `onChange`
 * so the parent form can clear it after a successful submission.
 */
interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  as?: "input" | "textarea";
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  type = "text",
  as = "input",
}: FieldProps) {
  const baseClasses =
    "mt-2 w-full rounded-2xl border border-sand-300 bg-cream px-4 py-3 text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-terracotta focus:bg-cream-100 focus:ring-2 focus:ring-terracotta/20 disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <label className="block text-sm" htmlFor={name}>
      <span className="text-forest-700 font-medium tracking-wide">{label}</span>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </label>
  );
}

/* ---------------------------------------------------------------------------
 * Footer
 * -------------------------------------------------------------------------*/
function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest-500 text-cream">
            <Leaf className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-lg text-forest-700">
            Studio Terras
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-ink/65">
          <li>
            <a href="#value" className="hover:text-terracotta transition-colors">
              Why It Matters
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-terracotta transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-terracotta transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <p className="text-sm text-ink/50">© 2026 Studio Terras.</p>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------------
 * Scroll reveal hook
 *
 * Attaches a single IntersectionObserver to every `.reveal` element on
 * the page, toggling `.is-visible` the first time each element enters
 * the viewport. Works in tandem with the `.reveal` / `.is-visible`
 * styles declared in index.css.
 * -------------------------------------------------------------------------*/
function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Graceful fallback: immediately show everything.
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
