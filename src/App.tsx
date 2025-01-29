import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Router>
        <Navbar />
        <div className="flex h-screen w-screen pt-16">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default App;
