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
        <div className="flex overflow-auto h-screen w-screen pt-16">
          {/* Sidebar fixed on the left */}
          <Sidebar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
          />

          {/* Main content area: scrolls while sidebar stays fixed */}
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto text-center text-black dark:text-white">
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
