import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Thamindu Wickramasinghe</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/resume" className="hover:underline">Resume</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
