import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
    return (
        <div className="relative min-h-screen overflow-x-clip bg-ink text-paper antialiased">
            {/* Film grain overlay */}
            <div aria-hidden className="grain pointer-events-none fixed inset-0 z-50" />

            <a
                href="#projects"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
            >
                Skip to content
            </a>

            <Navbar />

            <main>
                <section id="about">
                    <HeroSection />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="skills">
                    <SkillsSection />
                </section>

                <section id="certificates">
                    <Certificates />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    )
}
