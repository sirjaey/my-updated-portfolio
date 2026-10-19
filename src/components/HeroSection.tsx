import { ArrowDownRight, Download, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certificates, marquee, profile, projects } from "../data";

const pad = (n: number) => String(n).padStart(2, "0");

const stats = [
    { value: pad(projects.length), label: "Shipped projects" },
    { value: pad(certificates.length), label: "Certifications & awards" },
    { value: "AltSchool ’25", label: "Frontend Engineering graduate" },
    { value: "UTC+1", label: "Remote-friendly, based in Abuja" },
];

const HeroSection = () => {
    const reduce = useReducedMotion();
    const rise = (delay: number) => ({
        initial: reduce ? false : { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    });

    return (
        <div className="relative overflow-hidden pt-28 md:pt-36">
            {/* Faint grid + glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
            />
            <div aria-hidden className="pointer-events-none absolute -top-48 right-[-15%] h-[520px] w-[520px] rounded-full bg-signal/15 blur-[140px]" />

            <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12 md:items-end md:gap-10">
                <div className="md:col-span-7">
                    <motion.p
                        {...rise(0)}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to new opportunities
                    </motion.p>

                    <motion.h1
                        {...rise(0.08)}
                        className="mt-7 text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.045em]"
                    >
                        Frontend engineer building interfaces that feel <span className="accent pr-1">effortless.</span>
                    </motion.h1>

                    <motion.p {...rise(0.16)} className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                        Hi, I’m Joshua. I build accessible, performant, and delightful web apps with{" "}
                        <span className="text-paper">React, TypeScript and Tailwind</span>. I care about clean UI,
                        great developer experience, and shipping product-quality features.
                    </motion.p>

                    <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
                        >
                            See my work
                            <ArrowDownRight size={16} className="transition-transform group-hover:rotate-[-45deg]" />
                        </a>
                        <a
                            href={profile.cv}
                            download="Joshua-Abu-CV.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-paper/50"
                        >
                            <Download size={16} />
                            Download CV
                        </a>
                        <a
                            href={profile.cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-3 text-sm text-muted underline-offset-4 transition-colors hover:text-paper hover:underline"
                        >
                            Preview CV <ArrowUpRight size={14} />
                        </a>
                    </motion.div>
                </div>

                <motion.figure {...rise(0.2)} className="md:col-span-5">
                    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-ink-2">
                        <img
                            src="/myphoto.png"
                            alt="Portrait of Joshua Abu"
                            className="h-full w-full object-cover object-[50%_35%] grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink via-ink/60 to-transparent p-5 pt-16">
                            <div>
                                <p className="text-lg font-medium leading-tight">{profile.name}</p>
                                <p className="font-mono text-xs uppercase tracking-wider text-muted">{profile.role}</p>
                            </div>
                            <span className="font-display text-3xl italic text-signal">JA</span>
                        </div>
                    </div>
                    <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-wider text-muted">
                        <span>{profile.location}</span>
                        <span>{profile.coordinates}</span>
                    </figcaption>
                </motion.figure>
            </div>

            {/* Stats */}
            <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:mt-24">
                <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`py-6 pr-4 ${i % 2 === 1 ? "pl-4 border-l border-line md:pl-6" : ""} ${i === 2 ? "border-t border-line md:border-t-0 md:border-l md:pl-6" : ""} ${i === 3 ? "border-t md:border-t-0" : ""}`}
                        >
                            <dt className="sr-only">{s.label}</dt>
                            <dd className="text-2xl font-medium tracking-tight md:text-3xl">{s.value}</dd>
                            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Tech marquee */}
            <div className="relative border-y border-line bg-ink-2/60 py-5" aria-label="Technologies I work with">
                <div className="flex w-max animate-marquee [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {[0, 1].map((copy) => (
                        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                            {marquee.map((tech) => (
                                <li key={tech} className="flex items-center gap-8 pr-8 text-xl font-medium tracking-tight text-muted md:text-2xl">
                                    {tech}
                                    <span className="text-signal">✦</span>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
