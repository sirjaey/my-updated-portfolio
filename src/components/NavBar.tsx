import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 md:p-4 ">

            {/* Desktop Menu */}
            <nav className="space-x-4 hidden md:flex">
                <a href="#about" className="hover:underline">About</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#certificates" className="hover:underline">Certificates</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden focus:outline-none"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="absolute top-16 left-0 w-full bg-black/90 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" className="hover:underline" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#certificates" className="hover:underline" onClick={() => setIsOpen(false)}>Certificates</a>
                    <a href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;