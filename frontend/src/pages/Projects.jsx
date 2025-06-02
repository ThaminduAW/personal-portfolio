const projects = [
    {
      title: "CNC Web Portal",
      description: "A seafood booking and restaurant platform developed using MERN stack.",
      link: "https://cnc-web-portal.vercel.app/",
      github: "https://github.com/ThaminduAW/Project-CNC-Web-Portal",
    },
    {
      title: "Expense Tracker",
      description: "A simple expense tracking app with recurring and non-recurring payments.",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "The site you're viewing now. Built with React, Tailwind, and deployed on Render.",
      link: "#",
      github: "#",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="p-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-hunter-green">Projects</h2>
          <p className="text-lg text-eerie-black">Here are some of the projects I've worked on</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-dun rounded-xl shadow-lg p-6 border border-ash-gray hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-hunter-green">{project.title}</h3>
              <p className="text-eerie-black mb-4 leading-relaxed">{project.description}</p>
              <div className="flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-sky-blue text-seasalt px-4 py-2 rounded-md hover:bg-hunter-green transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ash-gray text-eerie-black px-4 py-2 rounded-md hover:bg-hunter-green hover:text-seasalt transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  