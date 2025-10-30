
const HeroSection = () => {
    return (<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 text-white">
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m Joshua. Frontend Engineer</h1>
            <p className="mt-4 text-lg opacity-90">I build accessible, performant, and delightful web apps using React, TypeScript, and Tailwind. I care about clean UI, great developer experience, and shipping product-quality features.</p>

            <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <a href="#projects" className="inline-block px-5 py-3 rounded-lg bg-white text-indigo-600 font-medium">View Projects</a>
                <a href="#contact" className="inline-block px-5 py-3 rounded-lg border border-white">Contact Me</a>
            </div>
        </div>

        <div className="rounded-2xl p-6 bg-white/20 backdrop-blur-md shadow-lg text-center">
            <img src="/suitNoBg.png" alt="Joshua Abu" className="w-full h-full object-cover" />

        </div>
    </section>)
}
export default HeroSection;