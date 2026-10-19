import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { certificates } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pad = (n: number) => String(n).padStart(2, "0");

const Certificates = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const isOpen = selectedIndex !== null;
    const selectedCert = isOpen ? certificates[selectedIndex] : null;

    const close = useCallback(() => setSelectedIndex(null), []);
    const step = useCallback(
        (dir: number) =>
            setSelectedIndex((i) => (i === null ? i : (i + dir + certificates.length) % certificates.length)),
        []
    );

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen, close, step]);

    return (
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
            <SectionHeading
                index="03"
                label="Credentials"
                aside="A glimpse into some of my proudest achievements and milestones. Select one to view it."
            >
                Learning, <span className="accent">on record.</span>
            </SectionHeading>

            <Reveal>
                <ul className="border-t border-line">
                    {certificates.map((cert, i) => (
                        <li key={cert.title}>
                            <button
                                onClick={() => setSelectedIndex(i)}
                                className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 text-left transition-colors hover:bg-ink-2 md:grid-cols-[48px_96px_1fr_170px_64px_auto] md:gap-6 md:px-4"
                            >
                                <span className="hidden font-mono text-xs text-muted md:block">{pad(i + 1)}</span>
                                <span className="block h-14 w-20 overflow-hidden rounded-md border border-line bg-paper md:h-16 md:w-24">
                                    <img src={cert.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                                </span>
                                <span>
                                    <span className="block font-medium leading-snug md:text-lg">{cert.title}</span>
                                    <span className="mt-1 block text-sm text-muted md:hidden">
                                        {cert.issuer} · {cert.date}
                                    </span>
                                </span>
                                <span className="hidden text-sm text-muted md:block">{cert.issuer}</span>
                                <span className="hidden font-mono text-sm text-muted md:block">{cert.date}</span>
                                <ArrowUpRight
                                    size={20}
                                    className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </Reveal>

            {/* MODAL */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 z-60 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="cert-title"
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl"
                            initial={{ y: 24, scale: 0.98 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 12, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-xs text-muted">
                                <span>
                                    {pad(selectedIndex! + 1)} / {pad(certificates.length)}
                                </span>
                                <button
                                    onClick={close}
                                    autoFocus
                                    aria-label="Close"
                                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full transition-colors hover:bg-ink-3 hover:text-paper"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="bg-paper p-3 md:p-4">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="mx-auto max-h-[58vh] w-auto rounded object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
                                <div>
                                    <h3 id="cert-title" className="text-lg font-medium leading-snug md:text-xl">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted">
                                        {selectedCert.issuer} · {selectedCert.date}
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <button
                                        onClick={() => step(-1)}
                                        aria-label="Previous certificate"
                                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-paper/50"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={() => step(1)}
                                        aria-label="Next certificate"
                                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-paper/50"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                    <a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper"
                                    >
                                        Verify <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;
