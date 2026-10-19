import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Toolkit" },
    { href: "#certificates", label: "Credentials" },
    { href: "#contact", label: "Contact" },
];

const formatAbujaTime = () =>
    new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Lagos",
    }).format(new Date());

const useAbujaTime = () => {
    const [time, setTime] = useState(formatAbujaTime);

    useEffect(() => {
        const id = setInterval(() => setTime(formatAbujaTime()), 15000);
        return () => clearInterval(id);
    }, []);

    return time;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const time = useAbujaTime();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const solid = scrolled || isOpen;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${solid ? "border-line bg-ink/80 backdrop-blur-md" : "border-transparent"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a href="#about" className="group flex items-center gap-3" aria-label="Joshua Abu, back to top">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line font-display text-lg italic transition-colors group-hover:border-signal group-hover:text-signal">
                        JA
                    </span>
                    <span className="text-sm font-medium tracking-tight">Joshua Abu</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                    {links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-paper"
                        >
                            <span className="mr-1.5 font-mono text-[10px] text-signal/70 transition-colors group-hover:text-signal">
                                0{i + 1}
                            </span>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 font-mono text-xs text-muted lg:flex" title="Local time in Abuja">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    ABJ {time} WAT
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav id="mobile-menu" className="border-t border-line px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
                    {links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-baseline gap-3 border-b border-line py-4 text-2xl font-medium tracking-tight"
                        >
                            <span className="font-mono text-xs text-signal">0{i + 1}</span>
                            {link.label}
                        </a>
                    ))}
                    <p className="mt-5 font-mono text-xs text-muted">Abuja · {time} WAT</p>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
