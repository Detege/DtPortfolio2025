import { useLocation } from "react-router-dom";

interface Props {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}

function Sidebar({ selectedFilters, toggleFilter }: Props) {
  const filters = [
    "All",
    "Web",
    "Email",
    "Editorial",
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
      <div className="space-y-4 flex flex-col">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => toggleFilter(item)}
            className={`size-min text-left py-1 px-4 rounded-full border-1 transition delay-0 duration-500 ease-in-out
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
