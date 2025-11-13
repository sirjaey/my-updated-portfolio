type Project = {
    id: string
    photo: string
    title: string
    description: string
    tech: string[]
    repo?: string
    live?: string
}

const Myprojects: Project[] = [
    {
        id: 'p1',
        photo: 'BigFarma.png',
        title: 'BigFarma',
        description: 'BigFarma is a modern web app that connects farmers, suppliers, and buyers.',
        tech: ['React', 'JavaScript', 'Axios', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/BigFarma_Frontend',
        live: 'https://big-farma-frontend.vercel.app/',
    },
    {
        id: 'p2',
        photo: 'TodoApp.png',
        title: 'Todo App',
        description: 'A full-stack todo application with auth and realtime updates.',
        tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/AltSchool-Second-Semester-Exam',
        live: 'https://joshua-abu-todo-list-exam.netlify.app/',
    },
    {
        id: 'p3',
        photo: 'spaceTourism.png',
        title: 'Space Tourism',
        description: 'A project exploring space tourism concepts and designs.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/space-tourism',
        live: 'https://joshua-abu-space-tourism.vercel.app/',
    },
    {
        id: 'p4',
        photo: 'Ecommerce.png',
        title: 'Ecommerce Single Product Page',
        description: 'A Frontend Mentor project showcasing a single product page for an ecommerce site.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/E-commerce-Single-Product-Page',
        live: 'https://joshua-abu-e-commerce-single-product-page.vercel.app/',
    },
    {
        id: 'p5',
        photo: 'mortgageCalc.png',
        title: 'Mortgage Calculator',
        description: 'A tool for calculating mortgage payments and interest rates.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sirjaey/Mortgage-Calculator',
        live: 'https://sirjaey.github.io/Mortgage-Calculator/',
    },
    {
        id: 'p6',
        photo: 'InteractiveCard.png',
        title: 'Interactive Card Details',
        description: 'A Frontend Mentor project showcasing an interactive card component.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/interactive-card-details',
        live: 'https://joshua-abu-interactive-card-details.netlify.app/',
    },
]

const Projects = () => { 

    return (
        <section className="mt-10 bg-gray-400/50 px-0 pt-4 md:pt-8 md:px-8 md:py-8 rounded-2xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">My Projects</h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Myprojects.map((p) => (
                    <article key={p.id} className="bg-white/80 md:rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                        <img className="w-full h-38  rounded-md" src={p.photo} alt="project image" />
                        <h3 className="font-semibold text-lg">{p.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                                <span key={t} className="text-xs px-2 py-1 border rounded-md">{t}</span>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-sm underline">Live</a>}
                            {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-sm underline">Repo</a>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Projects;
