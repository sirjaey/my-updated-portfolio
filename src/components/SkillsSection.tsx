import { Accessibility, Gauge, Boxes } from "lucide-react";
import { skillGroups } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
    {
        icon: Accessibility,
        title: "Accessible by default",
        body: "Semantic markup, keyboard support and readable contrast from the first commit, not as an afterthought.",
    },
    {
        icon: Gauge,
        title: "Performance is a feature",
        body: "Lean bundles, lazy-loaded media and interfaces that respond the moment you touch them.",
    },
    {
        icon: Boxes,
        title: "Built to be maintained",
        body: "Typed, composable components and a developer experience the next engineer will thank you for.",
    },
];

const SkillsSection = () => {
    return (
        <div className="border-y border-line bg-ink-2/50">
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
                <SectionHeading
                    index="02"
                    label="Toolkit"
                    aside="The skills and technologies powering my work: modern tools for crafting seamless digital experiences."
                >
                    The tools I <span className="accent">reach for.</span>
                </SectionHeading>

                <div className="grid gap-14 md:grid-cols-12 md:gap-10">
                    {/* Principles */}
                    <div className="space-y-4 md:col-span-5">
                        {principles.map(({ icon: Icon, title, body }, i) => (
                            <Reveal key={title} delay={i * 0.08}>
                                <div className="flex gap-4 rounded-2xl border border-line bg-ink p-5">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-signal">
                                        <Icon size={18} />
                                    </span>
                                    <div>
                                        <h3 className="font-medium">{title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Grouped stack */}
                    <Reveal delay={0.1} className="md:col-span-7">
                        <dl className="border-t border-line">
                            {skillGroups.map((group) => (
                                <div key={group.label} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                                    <dt className="pt-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted">{group.label}</dt>
                                    <dd className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-line bg-ink px-3.5 py-1.5 text-sm transition-colors hover:border-signal hover:text-signal"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
