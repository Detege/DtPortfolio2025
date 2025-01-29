import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-black dark:text-white">
      <div className="mx-auto flex justify-between items-center py-4 px-8">
        {/* Left Section - Name */}
        <div>
          <Link
            to="/home"
            className="text-black dark:text-white dark:hover:text-white"
          >
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
              className="text-black dark:text-white dark:hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black dark:text-white dark:hover:text-white"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
