import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => { 
    return (<footer className="mt-12 md:mt-20 text-center text-sm text-white/90">
        {/* <p>Follow me on:</p> */}
        <div className="flex justify-center space-x-4 mt-2 mb-3">
            <div className="p-5 bg-gray-900 rounded-full md:rounded-2xl">
                <a href="https://www.linkedin.com/in/joshua-abu-3180b0284" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>
            <div className="p-5 bg-gray-900 rounded-full md:rounded-2xl">
                <a href="https://github.com/sirjaey" target="_blank" rel="noopener noreferrer">
                    <Github className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>
            <div className="p-5 bg-gray-900 rounded-full md:rounded-2xl">
                <a href="https://x.com/SirJaey_" target="_blank" rel="noopener noreferrer">
                    <Twitter className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>
        </div>
        © {new Date().getFullYear()} Joshua Abu • All Rights Reserved.
    </footer>)
}

export default Footer;