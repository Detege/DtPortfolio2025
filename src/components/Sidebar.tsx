interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <aside className="w-64 p-4 flex flex-col justify-between text-black dark:text-white">
      <div className="space-y-4 flex flex-col">
        {["All", "Web", "Email", "Editorial", "Social", "Motion", "Print"].map(
          (item) => (
            <button
              key={item}
              className="size-min text-left py-1 px-4 rounded-full border-1 border-white dark:border-black hover:border-neutral-300 dark:hover:border-neutral-300 active:border-black dark:active:border-white"
            >
              {item}
            </button>
          )
        )}
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
};

export default Sidebar;
