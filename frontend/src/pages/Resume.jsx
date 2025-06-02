const Resume = () => {
    return (
      <section className="p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-hunter-green">My Resume</h2>
          <p className="text-lg text-eerie-black mb-8 max-w-2xl mx-auto">
            You can view or download my resume below to learn more about my skills, experience, and education.
          </p>
        </div>
        
        <div className="bg-dun p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-hunter-green">Professional Resume</h3>
            <p className="text-eerie-black mb-6">
              Get a comprehensive overview of my technical skills, work experience, and educational background.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-blue text-seasalt px-8 py-3 rounded-lg hover:bg-hunter-green transition-colors font-medium"
            >
              📄 View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-hunter-green text-seasalt px-8 py-3 rounded-lg hover:bg-sky-blue transition-colors font-medium"
            >
              📥 Download PDF
            </a>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-ash-gray p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold mb-2 text-hunter-green">Experience</h4>
            <p className="text-eerie-black">Full-stack development with modern technologies</p>
          </div>
          <div className="bg-sky-blue p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold mb-2 text-seasalt">Skills</h4>
            <p className="text-seasalt">MERN stack, JavaScript, React, Node.js</p>
          </div>
          <div className="bg-ash-gray p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold mb-2 text-hunter-green">Education</h4>
            <p className="text-eerie-black">Continuous learning and growth mindset</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
  