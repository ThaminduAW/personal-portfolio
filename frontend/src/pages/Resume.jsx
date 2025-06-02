const Resume = () => {
    return (
      <section className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Resume</h2>
        <p className="text-lg text-gray-700 mb-6">
          You can view or download my resume below to learn more about my skills, experience, and education.
        </p>
        <a 
          href="/resume.pdf" 
          download 
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Download Resume (PDF)
        </a>
      </section>
    );
  };
  
  export default Resume;
  