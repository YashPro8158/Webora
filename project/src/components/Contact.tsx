import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { Reveal, SectionHeading, WhatsAppCTA } from '@/components/ui';
import { whatsappLink } from '@/config';

const BUSINESS_TYPES = [
  'Interior Designer',
  'Clinic / Dentist',
  'CA / Consultant',
  'Real Estate',
  'Salon / Gym',
  'Photographer',
  'Restaurant',
  'Coach',
  'Other',
];

interface FormState {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  currentWebsite: string;
  message: string;
}

const INITIAL: FormState = {
  name: '',
  businessName: '',
  phone: '',
  businessType: '',
  currentWebsite: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.businessName.trim()) next.businessName = 'Please enter your business name';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number';
    if (!form.businessType) next.businessType = 'Please select your business type';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Structured so a backend/email service can be connected later.
    // For now we surface a success state and offer a WhatsApp handoff.
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Webora, I'd like to request a free website demo.\n\nName: ${form.name}\nBusiness: ${form.businessName}\nType: ${form.businessType}\nPhone: ${form.phone}${form.currentWebsite ? `\nCurrent site: ${form.currentWebsite}` : ''}${form.message ? `\nMessage: ${form.message}` : ''}`;

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: heading + info */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Request Your Free Website Demo."
              subtitle="Tell us about your business and we'll show you exactly what your website could look like. No pressure, no obligation."
            />

            <Reveal delay={120}>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-ink-850/60 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-cream-500">Prefer to chat directly?</p>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-cream-50 hover:text-gold-400">
                      Talk to Webora on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form / success */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-white/[0.07] bg-ink-850/70 p-7 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-cream-50">Thank you, {form.name.split(' ')[0]}!</h3>
                    <p className="max-w-sm text-pretty text-sm leading-relaxed text-cream-400">
                      We've received your request. To speed things up, send us a quick message on WhatsApp
                      with your details and we'll share your free demo shortly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <WhatsAppCTA message={whatsappMessage}>Send Details on WhatsApp</WhatsAppCTA>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL);
                      }}
                      className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-cream-300 hover:bg-white/5"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => update('name', v)}
                      error={errors.name}
                      placeholder="Your full name"
                    />
                    <Field
                      label="Business Name"
                      required
                      value={form.businessName}
                      onChange={(v) => update('businessName', v)}
                      error={errors.businessName}
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone Number"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update('phone', v)}
                      error={errors.phone}
                      placeholder="10-digit mobile number"
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-cream-300">
                        Business Type <span className="text-gold-400">*</span>
                      </label>
                      <select
                        value={form.businessType}
                        onChange={(e) => update('businessType', e.target.value)}
                        className={`rounded-xl border bg-ink-900/80 px-4 py-3 text-sm text-cream-100 outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 ${
                          errors.businessType ? 'border-red-400/50' : 'border-white/[0.08]'
                        }`}
                      >
                        <option value="">Select your business type</option>
                        {BUSINESS_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="h-3 w-3" /> {errors.businessType}
                        </p>
                      )}
                    </div>
                  </div>

                  <Field
                    label="Current Website"
                    optional
                    value={form.currentWebsite}
                    onChange={(v) => update('currentWebsite', v)}
                    placeholder="https://your-current-site.com (optional)"
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-cream-300">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={3}
                      placeholder="Tell us a little about what you're looking for..."
                      className="resize-none rounded-xl border border-white/[0.08] bg-ink-900/80 px-4 py-3 text-sm text-cream-100 outline-none transition-all placeholder:text-cream-500/60 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_8px_28px_-10px_rgba(232,178,90,0.55)] transition-all duration-300 hover:from-gold-200 hover:via-gold-300 hover:to-gold-400 hover:shadow-[0_12px_36px_-10px_rgba(232,178,90,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Request My Free Demo
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-xs text-cream-500">
                    We'll get back to you within 24 hours. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
}

function Field({ label, value, onChange, error, placeholder, required, optional, type = 'text' }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-cream-300">
        {label}
        {required && <span className="text-gold-400"> *</span>}
        {optional && <span className="text-cream-500"> (optional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`rounded-xl border bg-ink-900/80 px-4 py-3 text-sm text-cream-100 outline-none transition-all placeholder:text-cream-500/60 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 ${
          error ? 'border-red-400/50' : 'border-white/[0.08]'
        }`}
      />
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      )}
    </div>
  );
}
