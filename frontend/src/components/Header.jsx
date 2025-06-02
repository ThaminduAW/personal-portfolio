import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-hunter-green text-seasalt p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Thamindu Wickramasinghe</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-sky-blue transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sky-blue transition-colors">About</Link>
          <Link to="/projects" className="hover:text-sky-blue transition-colors">Projects</Link>
          <Link to="/resume" className="hover:text-sky-blue transition-colors">Resume</Link>
          <Link to="/contact" className="hover:text-sky-blue transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
