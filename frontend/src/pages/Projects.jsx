import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "CNC Web Portal",
    description: "A seafood booking and restaurant platform developed using MERN stack with user authentication and booking management.",
    link: "https://cnc-web-portal.vercel.app/",
    github: "https://github.com/ThaminduAW/Project-CNC-Web-Portal",
    tech: "MERN",
    status: "Live",
    year: "2024"
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive expense tracking application with recurring and non-recurring payment tracking, built with modern React patterns.",
    link: "#",
    github: "#",
    tech: "React",
    status: "Dev",
    year: "2024"
  },
  {
    title: "Portfolio Website",
    description: "The site you're viewing now. Built with React, Tailwind CSS, and deployed on Render with modern design principles.",
    link: "#",
    github: "#",
    tech: "React",
    status: "Live",
    year: "2024"
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-hunter-green">My Projects</h2>
        <p className="text-lg lg:text-xl text-ash-gray max-w-2xl mx-auto">
          Here's a showcase of some projects I've worked on, featuring modern web technologies and thoughtful design.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-ash-gray mb-4">Want to see more of my work?</p>
        <a 
          href="https://github.com/ThaminduAW" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-hunter-green text-seasalt rounded-lg hover:bg-hunter-green/90 transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
  