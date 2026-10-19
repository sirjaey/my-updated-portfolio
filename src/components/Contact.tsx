import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ArrowUpRight, Check, Copy, MapPin, Phone, Send } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profile, socials } from '../data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SERVICE_ID = 'service_l204kpb';
const TEMPLATE_ID = 'template_3bcsn2q';
const PUBLIC_KEY = 'pKHk4Bn0peBByCoNX';

const fieldClass =
    'peer w-full border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted/50 focus:border-signal';

const Contact = () => {
    const [sending, setSending] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        const form = e.currentTarget;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(() => {
                toast.success('Message sent. I’ll get back to you soon!');
                form.reset();
            })
            .catch((err) => {
                console.error('EmailJS error:', err?.status, err?.text ?? err);
                const data = new FormData(form);
                const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name') ?? ''}`);
                const body = encodeURIComponent(`${data.get('message') ?? ''}\n\nReply to: ${data.get('email') ?? ''}`);
                toast.error(
                    <span>
                        Couldn’t send right now.{' '}
                        <a href={`mailto:${profile.email}?subject=${subject}&body=${body}`} className="underline">
                            Email me directly instead
                        </a>
                        .
                    </span>,
                    { autoClose: 8000 }
                );
            })
            .finally(() => setSending(false));
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />

            <SectionHeading index="04" label="Contact">
                Have a project in mind? <span className="accent">Let’s talk.</span>
            </SectionHeading>

            <div className="grid gap-14 md:grid-cols-12 md:gap-10">
                {/* Contact Info */}
                <Reveal className="md:col-span-5">
                    <p className="max-w-md text-pretty leading-relaxed text-muted">
                        I’d love to hear from you! Whether you have a question about my work, want to collaborate,
                        or just want to say hi, my inbox is always open.
                    </p>

                    <div className="mt-8 rounded-2xl border border-line bg-ink-2 p-5">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Email</p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="break-all text-lg font-medium transition-colors hover:text-signal md:text-xl"
                            >
                                {profile.email}
                            </a>
                            <button
                                onClick={copyEmail}
                                aria-label={copied ? 'Email copied' : 'Copy email address'}
                                className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-signal hover:text-signal"
                            >
                                {copied ? <Check size={16} /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>

                    <ul className="mt-6 space-y-3 text-muted">
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-signal" />
                            <a href={profile.phoneHref} className="transition-colors hover:text-paper">{profile.phone}</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={16} className="text-signal" />
                            {profile.location}
                        </li>
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-2">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-paper/50"
                                >
                                    {s.label} <ArrowUpRight size={14} className="text-muted" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Contact Form */}
                <Reveal delay={0.1} className="md:col-span-7">
                    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-line bg-ink-2 p-6 md:p-10">
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Name</label>
                                <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Email</label>
                                <input id="email" type="email" name="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className={`${fieldClass} resize-none`}
                                placeholder="Tell me a little about what you're building…"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-medium text-ink transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-60"
                        >
                            {sending ? 'Sending…' : 'Send message'}
                            <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </form>
                </Reveal>
            </div>
        </div>
    );
};

export default Contact;
