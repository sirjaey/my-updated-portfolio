import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
    index: string;
    label: string;
    children: ReactNode;
    aside?: ReactNode;
};

const SectionHeading = ({ index, label, children, aside }: SectionHeadingProps) => {
    return (
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-8">
                <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    <span className="text-signal">{index}</span>
                    <span className="h-px w-8 bg-line" />
                    {label}
                </p>
                <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                    {children}
                </h2>
            </Reveal>
            {aside && (
                <Reveal delay={0.1} className="text-pretty leading-relaxed text-muted md:col-span-4">
                    {aside}
                </Reveal>
            )}
        </div>
    );
};

export default SectionHeading;
