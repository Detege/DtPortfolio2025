import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface Props {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

function Sidebar({
  selectedFilters,
  toggleFilter,
  darkMode,
  setDarkMode,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const filters = [
    "All",
    "Web",
    "Interface",
    "Brand",
    "Social",
    "Email",
    "Motion",
    "Print",
  ];
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/" || location.pathname === "/about";
  if (hideSidebar) return null;

  return (
    <div className="relative">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-black dark:text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-40 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col space-y-4 px-6 pt-20">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter(item)}
              className={`size-min rounded-full border px-4 py-1 text-left transition delay-0 duration-500 ease-in-out
                ${selectedFilters.includes(item) ? "border-black dark:border-white" : "border-white dark:border-black hover:border-neutral-300"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="fixed bottom-6 left-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="size-min rounded-full border-1 border-white px-4 py-1 text-left hover:border-neutral-300 active:border-black dark:border-black dark:hover:border-neutral-300 dark:active:border-white"
          >
            {darkMode ? "Light\xA0Mode" : "Dark\xA0Mode"}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <div className="flex flex-col space-y-4 p-6">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter(item)}
              className={`size-min rounded-full border px-4 py-1 text-left transition delay-0 duration-500 ease-in-out
                ${selectedFilters.includes(item) ? "border-black dark:border-white" : "border-white dark:border-black hover:border-neutral-300"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
