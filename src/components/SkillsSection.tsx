import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
    name: string;
    level: number;
    color: string;
}

const skills: Skill[] = [
    { name: "React", level: 95, color: "bg-cyan-400" },
    { name: "TypeScript", level: 90, color: "bg-indigo-400" },
    { name: "Node.js", level: 80, color: "bg-emerald-400" },
    { name: "Next.js", level: 80, color: "bg-gray-400" },
    { name: "Tailwind CSS", level: 95, color: "bg-sky-400" },
    { name: "JavaScript", level: 95, color: "bg-pink-400" },
];

const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Bootstrap",
    "Next.js",
    "Tailwind CSS",
    "Git/GitHub",
    "React Query",
    "Tanstack Query",
    "UI Frameworks",
    "RESTful APIs",
    "React Testing Library",
];

const SkillsSection: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    React.useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <section
            className="relative  flex flex-col justify-center items-center text-white overflow-hidden mt-16 rounded-2xl p-6 shadow-md"
        >
            
            <div className="absolute inset-0 animate-gradient  bg-gray-700 opacity-50 -z-10" />

            <div className="container mx-auto md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    The skills and technologies powering my work, crafting seamless digital experiences with modern tools.
                </p>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                >
                    {/* Left column: Skill bars */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Proficiency Level</h3>
                        {skills.map((skill) => (
                            <div key={skill.name} className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <motion.div
                                        className={`h-2.5 rounded-full ${skill.color}`}
                                        initial={{ width: 0 }}
                                        animate={controls}
                                        variants={{
                                            visible: { width: `${skill.level}%`, transition: { duration: 1.2 } },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column: Technology tags */}
                    <div className="hidden md:block">
                        <h3 className="text-lg font-semibold mb-6">Technologies</h3>
                        <div className="md:flex-wrap gap-3 flex">
                            {technologies.map((tech) => (
                                <motion.span
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm transition-all duration-300 cursor-default"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
