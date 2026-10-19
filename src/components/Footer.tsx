import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { profile, socials } from "../data";

const icons = [Linkedin, Github, Twitter];

const Footer = () => {
    return (
        <footer className="overflow-hidden border-t border-line">
            <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-sm text-muted">
                        Designed &amp; built by {profile.name} with React, TypeScript and Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-2">
                        {socials.map((s, i) => {
                            const Icon = icons[i];
                            return (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-signal hover:text-signal"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                        <a
                            href="#about"
                            aria-label="Back to top"
                            className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink transition-colors hover:bg-signal"
                        >
                            <ArrowUp size={18} />
                        </a>
                    </div>
                </div>

                <p
                    aria-hidden
                    className="mt-12 select-none whitespace-nowrap text-center text-[clamp(4rem,17vw,15rem)] font-medium leading-[0.8] tracking-[-0.06em] text-paper/[0.06]"
                >
                    Joshua <span className="font-display font-normal italic">Abu</span>
                </p>

                <div className="flex flex-col gap-2 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
                    <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
                    <span>{profile.location} · {profile.coordinates}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
