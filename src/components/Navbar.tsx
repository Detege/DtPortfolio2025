import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex justify-between items-center py-4 px-8">
        {/* Left Section - Name */}
        <div className="text-xl font-bold">
          <Link to="/home" className="hover:text-gray-400">
            Daniel Terol
          </Link>
        </div>

        {/* Right Section - Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-terol/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Contact
            </a>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
