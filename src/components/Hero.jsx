import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useCustomCursor } from "../context/CustomCursorContext";

const Hero = () => {
  const el = useRef(null);
  const { enlargeCursor, shrinkCursor } = useCustomCursor();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Graphic Designer", "Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative pt-40 sm:pt-28 h-[80vh] sm:h-[100vh]"
      >
        <div className="relative flex justify-center items-center md:justify-start py-16 mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-5 text-center md:text-left transition-all duration-300">
          <div className="absolute z-[-1] md:top-32 top-16 right-56 md:right-80 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
          <div className="absolute z-[-1] md:top-36 top-24 right-40 md:right-72 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
          <div className="absolute z-[-1] md:top-48 top-32 right-32 md:right-56 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute z-[-1] md:top-56 top-40 right-24 md:right-48 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute z-[-1] md:top-64 top-48 right-16 md:right-36 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="flex flex-wrap items-center">
            <div
              className="w-full self-center items-center px-4"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <h1 className=" text-4xl md:text-6xl lg:text-7xl  text-mainBlack dark:text-white">
                Hello👋
                <span className="block text-mainBlack dark:text-white text-4xl md:text-6xl lg:text-7xl">
                  I'm <span className="font-bold">Loa Pamungkas</span>
                </span>
              </h1>
              <h2 className="text-gray-600 dark:text-gray-100 py-2 text-4xl md:text-6xl lg:text-7xl">
                a <span ref={el}></span>
              </h2>
              <h2 className="text-gray-600 dark:text-gray-100 text-4xl md:text-6xl lg:text-7xl">
                Based In Yogyakarta.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
