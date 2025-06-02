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
      description: "The site you’re viewing now. Built with React, Tailwind, and deployed on Render.",
      link: "#",
      github: "#",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5 border">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex gap-4 text-sm text-blue-600">
                <a href={project.link} target="_blank" className="hover:underline">Live Demo</a>
                <a href={project.github} target="_blank" className="hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  