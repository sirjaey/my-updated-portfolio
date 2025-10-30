import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio(): JSX.Element {
    return (
        <div className="min-h-screen relative text-gray-900 antialiased overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-[length:400%_400%]"></div>
            <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>

            <header className="max-w-6xl mx-auto p-6 flex bg-purple-900/50 md:bg-purple-900/5 mt-0 md:relative fixed top-0 left-0 right-0 z-20 items-center justify-between text-white shadow-md">
                <div className="text-xl font-semibold">Joshua Abu</div>
                <Navbar />
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-20 text-gray-900 pt-24 md:pt-0">
                {/* Hero */}
                <section id='about'>
                    <HeroSection />
                </section>

                {/* Projects */}
                <section id="projects">
                    <Projects />
                </section>

                {/* {SkillsSection} */}
                <section id="skills" className="">
                    <SkillsSection />
                </section>

                {/* Contact */}
                <section id="contact">
                    <Contact />
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    )
}
