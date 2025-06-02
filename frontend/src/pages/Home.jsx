import Hero from '../components/Hero';

const Home = () => {
    return (
      <>
        <Hero />
        <section className="p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-hunter-green">Welcome to My Portfolio</h2>
            <p className="text-xl mb-8 text-eerie-black">I'm Thamindu, a web developer passionate about crafting digital experiences.</p>
            
            <div className="bg-dun p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-hunter-green">Let's Build Something Amazing</h3>
              <p className="text-lg text-eerie-black">Explore my work, learn about my journey, and let's connect to create innovative solutions together.</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a href="/projects" className="bg-sky-blue text-seasalt px-6 py-3 rounded-lg hover:bg-hunter-green transition-colors">
                View Projects
              </a>
              <a href="/contact" className="bg-hunter-green text-seasalt px-6 py-3 rounded-lg hover:bg-sky-blue transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  