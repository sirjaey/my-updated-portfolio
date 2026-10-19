import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Projects = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
            <SectionHeading
                index="01"
                label="Selected work"
                aside="A mix of product work, full-stack builds and pixel-precise challenges, each one shipped and live."
            >
                Things I’ve <span className="accent">built.</span>
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p, i) => {
                    const featured = i === 0;
                    return (
                        <Reveal key={p.id} delay={featured ? 0 : (i % 2) * 0.08} className={featured ? "md:col-span-2" : ""}>
                            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-colors duration-300 hover:border-paper/25">
                                <a
                                    href={p.live ?? p.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex={-1}
                                    aria-hidden
                                    className={`relative block overflow-hidden border-b border-line bg-ink-3 ${featured ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]"}`}
                                >
                                    <img
                                        src={p.photo}
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    />
                                    <span className="absolute left-4 top-4 rounded-full border border-paper/10 bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper backdrop-blur">
                                        {p.kind}
                                    </span>
                                </a>

                                <div className={`flex flex-1 flex-col gap-4 p-5 md:p-7 ${featured ? "md:flex-row md:items-start md:gap-12" : ""}`}>
                                    <div className={featured ? "md:w-1/2" : ""}>
                                        <div className="flex items-baseline gap-3">
                                            <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                                            <h3 className={`font-medium tracking-tight ${featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-pretty leading-relaxed text-muted">{p.description}</p>
                                    </div>

                                    <div className={`mt-auto flex flex-col gap-5 ${featured ? "md:mt-0 md:w-1/2" : ""}`}>
                                        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                                            {p.tech.map((t) => (
                                                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {p.live && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-signal"
                                                >
                                                    Live site <ArrowUpRight size={15} />
                                                    <span className="sr-only">for {p.title}</span>
                                                </a>
                                            )}
                                            {p.repo && (
                                                <a
                                                    href={p.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-paper/50"
                                                >
                                                    <Github size={15} /> Source
                                                    <span className="sr-only">code for {p.title}</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
