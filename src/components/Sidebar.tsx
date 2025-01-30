interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}

function Sidebar({
  darkMode,
  setDarkMode,
  selectedFilters,
  toggleFilter,
}: Props) {
  const filters = [
    "All",
    "Web",
    "Email",
    "Editorial",
    "Social",
    "Motion",
    "Print",
  ];

  return (
    <aside className="w-40 p-4 flex flex-col justify-between text-black dark:text-white">
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
      <div className="flex flex-col">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="size-min text-left py-1 px-4 rounded-full border-1 border-white dark:border-black hover:border-neutral-300 dark:hover:border-neutral-300 active:border-black dark:active:border-white"
        >
          {darkMode ? "Light\xA0Mode" : "Dark\xA0Mode"}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
