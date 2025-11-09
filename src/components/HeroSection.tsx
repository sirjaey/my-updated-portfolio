import { FileText, Download } from "lucide-react";

const HeroSection = () => {
    return (<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 text-white">
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m Joshua. Frontend Engineer</h1>
            <p className="mt-4 text-lg opacity-90">I build accessible, performant, and delightful web apps using React, TypeScript, and Tailwind. I care about clean UI, great developer experience, and shipping product-quality features.</p>

            
            <div className="flex justify-center md:justify-start gap-4 mt-6">
                {/* Preview Button */}
                <a
                    href="/Joshua-Abu-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
                >
                    <FileText size={18} />
                    Preview CV
                </a>

                {/* Download Button */}
                <a
                    href="/Joshua-Abu-CV.pdf"
                    download="Joshua-Abu-CV.pdf"
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    <Download size={18} />
                    Download CV
                </a>
            </div>
        </div>

        <div className="rounded-2xl p-6 bg-white/20 backdrop-blur-md shadow-lg text-center">
            <img src="/me.png" alt="Joshua Abu" className="w-full h-full object-cover" />

        </div>
    </section>)
}
export default HeroSection;