import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navbarButtonLabel = location.pathname === "/about" ? "Work" : "About";

  return (
    <nav className="fixed top-0 left-0 w-full text-black dark:text-white">
      <div className="mx-auto flex items-center justify-between px-8 py-4">
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
              to={navbarButtonLabel === "About" ? "/about" : "/home"}
              className="text-black dark:text-white dark:hover:text-white"
            >
              {navbarButtonLabel}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
