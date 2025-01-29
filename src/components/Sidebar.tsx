interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <aside className="w-64 p-4 flex flex-col justify-between">
      <div className="space-y-4">
        {["All", "Web", "Email", "Editorial", "Social", "Motion", "Print"].map(
          (item) => (
            <button
              key={item}
              className="w-full text-left p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {item}
            </button>
          )
        )}
      </div>
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full text-left p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
