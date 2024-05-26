import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CustomCursorProvider } from "./context/CustomCursorContext";
import { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isDark, setIsDark] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDark((prevState) => !prevState);
  // };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };
  return (
    <CustomCursorProvider>
      <div className={`app dark:bg-mainBlack ${isDark ? "dark" : ""}`}>
        <div className="absolute inset-x-0 grid grid-cols-2  opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="relative z-10">
          <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </CustomCursorProvider>
  );
}

export default App;
