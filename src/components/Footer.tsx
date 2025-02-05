import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  const hideFooter = location.pathname === "/";
  if (hideFooter) return null;

  return (
    <footer className="w-full grow pt-75 pb-4 text-center text-xs text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Daniel Terol. All rights reserved.
    </footer>
  );
}

export default Footer;
