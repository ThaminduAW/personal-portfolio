const About = () => {
    return (
      <section className="p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-hunter-green">About Me</h2>
        </div>
        
        <div className="bg-dun p-8 rounded-lg shadow-lg mb-8">
          <p className="text-lg text-eerie-black leading-relaxed mb-4">
            Hello! I'm <strong className="text-hunter-green">Thamindu Abeywardhana Wickramasinghe</strong>, a passionate and motivated web developer 
            with experience in building full-stack applications using the MERN stack. I'm always eager to learn new technologies 
            and turn ideas into reality through clean, efficient code. 
          </p>
          <p className="text-lg text-eerie-black leading-relaxed">
            I'm currently focused on developing modern, professional websites and applications for clients and personal growth. 
            Outside of coding, I enjoy design, technology exploration, and collaborating on creative projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-ash-gray p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-hunter-green">Skills & Technologies</h3>
            <p className="text-eerie-black">MERN Stack, JavaScript, React, Node.js, and modern web development practices.</p>
          </div>
          <div className="bg-sky-blue p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-seasalt">Current Focus</h3>
            <p className="text-seasalt">Building professional websites and applications while exploring cutting-edge technologies.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  