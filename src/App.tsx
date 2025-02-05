import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  function toggleFilter(filter: string) {
    if (filter === "All") {
      setSelectedFilters(["All"]);
    } else {
      setSelectedFilters((prev) => {
        const isSelected = prev.includes(filter);
        const newFilters = isSelected
          ? prev.filter((item) => item !== filter) // Remove if already selected
          : [...prev.filter((item) => item !== "All"), filter]; // Add & remove "All"

        return newFilters.length === 0 ? ["All"] : newFilters;
      });
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-black`}>
      <Router>
        <Navbar />
        <div className="flex h-screen w-screen overflow-auto pt-16">
          <aside className="fixed top-16 left-0 flex w-40 flex-col justify-between p-4 text-black dark:text-white">
            <Sidebar
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
            />
            <div className="fixed bottom-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="size-min rounded-full border-1 border-white px-4 py-1 text-left hover:border-neutral-300 active:border-black dark:border-black dark:hover:border-neutral-300 dark:active:border-white"
              >
                {darkMode ? "Light\xA0Mode" : "Dark\xA0Mode"}
              </button>
            </div>
          </aside>

          {/* Main content area: scrolls while sidebar stays fixed */}
          <main className="flex flex-1 p-8">
            <div className="mx-auto max-w-7xl flex-1">
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route
                  path="/home"
                  element={<Home selectedFilters={selectedFilters} />}
                />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
