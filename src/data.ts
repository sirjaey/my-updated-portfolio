export type Project = {
    id: string
    photo: string
    title: string
    kind: string
    description: string
    tech: string[]
    repo?: string
    live?: string
}

export type Certificate = {
    title: string
    issuer: string
    image: string
    date: string
    link: string
}

export const profile = {
    name: 'Joshua Abu',
    role: 'Frontend Engineer',
    email: 'joshuaabu1995@gmail.com',
    phone: '+234 810 942 8027',
    phoneHref: 'tel:+2348109428027',
    location: 'Abuja, Nigeria',
    coordinates: '9.0765° N, 7.3986° E',
    cv: '/Joshua-Abu-CV.pdf',
}

export const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-abu-3180b0284' },
    { label: 'GitHub', href: 'https://github.com/sirjaey' },
    { label: 'X / Twitter', href: 'https://x.com/SirJaey_' },
]

export const projects: Project[] = [
    {
        id: 'p1',
        photo: 'BigFarma.png',
        title: 'BigFarma',
        kind: 'Web platform',
        description: 'A modern web app that connects farmers, suppliers, and buyers, helping transform Africa’s agro business.',
        tech: ['React', 'JavaScript', 'Axios', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/BigFarma_Frontend',
        live: 'https://big-farma-frontend.vercel.app/',
    },
    {
        id: 'p2',
        photo: 'TodoApp.png',
        title: 'Todo App',
        kind: 'Full-stack app',
        description: 'A full-stack todo application with authentication and realtime updates.',
        tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/AltSchool-Second-Semester-Exam',
        live: 'https://joshua-abu-todo-list-exam.netlify.app/',
    },
    {
        id: 'p3',
        photo: 'spaceTourism.png',
        title: 'Space Tourism',
        kind: 'Multi-page site',
        description: 'A multi-page site exploring space tourism destinations, crew, and technology.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/space-tourism',
        live: 'https://joshua-abu-space-tourism.vercel.app/',
    },
    {
        id: 'p4',
        photo: 'Ecommerce.png',
        title: 'E-commerce Product Page',
        kind: 'Frontend Mentor',
        description: 'A single product page for an e-commerce store, with an image gallery and cart.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/E-commerce-Single-Product-Page',
        live: 'https://joshua-abu-e-commerce-single-product-page.vercel.app/',
    },
    {
        id: 'p5',
        photo: 'mortgageCalc.png',
        title: 'Mortgage Calculator',
        kind: 'Utility',
        description: 'A tool for calculating mortgage repayments and total interest.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sirjaey/Mortgage-Calculator',
        live: 'https://sirjaey.github.io/Mortgage-Calculator/',
    },
    {
        id: 'p6',
        photo: 'InteractiveCard.png',
        title: 'Interactive Card Details',
        kind: 'Frontend Mentor',
        description: 'An interactive card form that previews card details live as you type.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/sirjaey/interactive-card-details',
        live: 'https://joshua-abu-interactive-card-details.netlify.app/',
    },
]

export const certificates: Certificate[] = [
    {
        title: 'AltSchool Africa Graduation Certificate',
        issuer: 'AltSchool Africa',
        image: './AltSchoolCert.png',
        date: '2025',
        link: 'https://altschoolafrica.com',
    },
    {
        title: 'Frontend Engineering Track Completion',
        issuer: 'AltSchool Africa',
        image: './FrontendTrack.png',
        date: '2025',
        link: 'https://altschoolafrica.com',
    },
    {
        title: 'Ayoba Developer Scholarship Program Award',
        issuer: 'Ayoba',
        image: './Ayoba.png',
        date: '2024',
        link: 'https://altschoolafrica.com/scholarship/ayoba-developer-program-scholarship-fund',
    },
    {
        title: 'Responsive Web Design Certification',
        issuer: 'freeCodeCamp',
        image: './ResponsiveWD1.png',
        date: '2025',
        link: 'https://www.freecodecamp.org/certification/joshuaabu/responsive-web-design',
    },
    {
        title: 'Legacy JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        image: './legacyJs.png',
        date: '2025',
        link: 'https://www.freecodecamp.org/certification/joshuaabu/javascript-algorithms-and-data-structures',
    },
]

export const skillGroups = [
    { label: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js'] },
    { label: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'UI component libraries'] },
    { label: 'Data & testing', items: ['TanStack Query', 'RESTful APIs', 'React Testing Library'] },
    { label: 'Workflow', items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Netlify'] },
]

export const marquee = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'JavaScript',
    'TanStack Query', 'REST APIs', 'Testing Library', 'Git & GitHub',
]
