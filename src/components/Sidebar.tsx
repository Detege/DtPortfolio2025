import { useLocation } from "react-router-dom";

interface Props {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}

function Sidebar({ selectedFilters, toggleFilter }: Props) {
  const filters = [
    "All",
    "Web",
    "Interface",
    "Email",
    "Social",
    "Motion",
    "Print",
  ];
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/" || location.pathname === "/about";
  if (hideSidebar) return null;

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => toggleFilter(item)}
            className={`size-min rounded-full border-1 px-4 py-1 text-left transition delay-0 duration-500 ease-in-out
              ${selectedFilters.includes(item) ? "border-black dark:border-white" : "border-white dark:border-black hover:border-neutral-300"}
              `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
