import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daniel-terol/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
