import React, { useEffect, useState } from "react";
import { useCustomCursor } from "../context/CustomCursorContext";

const Navbar = ({ toggleDarkMode, isDark }) => {
  const { enlargeCursor, shrinkCursor } = useCustomCursor();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white/90 dark:bg-mainBlack/90 shadow-sm backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a
                className="block text-blue-600 dark:text-mainBlack"
                href="#"
                onClick={() => setIsOpen(false)}
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              >
                <span className="sr-only">Home</span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 370 370"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-600 dark:fill-white"
                >
                  <path d="M160.858 0.5H10C4.47715 0.5 0 4.97716 0 10.5V360C0 365.523 4.47715 370 10 370H160.358C169.267 370 173.729 359.229 167.429 352.929L7.07107 192.571C3.16582 188.666 3.16583 182.334 7.07107 178.429L167.929 17.5711C174.229 11.2714 169.767 0.5 160.858 0.5Z" />
                  <path d="M309.142 0H360C365.523 0 370 4.47715 370 9.99999V360C370 365.523 365.523 370 360 370H309.142C306.49 370 303.946 368.946 302.071 367.071L127.071 192.071C123.166 188.166 123.166 181.834 127.071 177.929L302.071 2.92893C303.946 1.05357 306.49 0 309.142 0Z" />
                </svg>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li onMouseEnter={enlargeCursor} onMouseLeave={shrinkCursor}>
                    <a
                      className="text-gray-600 dark:text-gray-100 transition"
                      href="#aboutme"
                    >
                      About
                    </a>
                  </li>

                  <li onMouseEnter={enlargeCursor} onMouseLeave={shrinkCursor}>
                    <a
                      className="text-gray-600 dark:text-gray-100 transition"
                      href="#skill"
                    >
                      Skills
                    </a>
                  </li>
                  <li onMouseEnter={enlargeCursor} onMouseLeave={shrinkCursor}>
                    <a
                      className="text-gray-600 dark:text-gray-100 transition"
                      href="#project"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <a
                    className="rounded-md px-5 py-2.5 text-sm font-medium shadow bg-blue-600 text-white hover:bg-blue-700 dark:bg-gray-200 dark:text-mainBlack dark:hover:bg-gray-100"
                    href="https://drive.google.com/file/d/1JSPNDmwq-JTfpyMDI2iKrPWJIOZINbpp/view?usp=sharing"
                    target="_blank"
                    onMouseEnter={enlargeCursor}
                    onMouseLeave={shrinkCursor}
                  >
                    Download CV
                  </a>
                  <a
                    className="rounded-md  p-2.5 text-sm shadow cursor-pointer bg-blue-100 hover:bg-blue-200 dark:bg-gray-600 dark:hover:bg-gray-500"
                    onClick={toggleDarkMode}
                    onMouseEnter={enlargeCursor}
                    onMouseLeave={shrinkCursor}
                  >
                    {!isDark ? (
                      <img src="/sun.svg" alt="Sun icon" />
                    ) : (
                      <img src="/moon.svg" alt="Moon icon" />
                    )}
                  </a>
                </div>

                <div className="block md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md p-2.5 bg-blue-100 dark:bg-gray-100 text-gray-600"
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-full transform p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white text-mainBlack dark:bg-mainBlack dark:text-white`}
      >
        <nav className="mt-20 space-y-4 text-center">
          <a
            className="block text-lg"
            href="#aboutme"
            onClick={() => setIsOpen(false)}
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            <span className="hover:bg-gray-200 hover:font-semibold dark:hover:bg-white/20 px-2.5 py-2 rounded">
              About
            </span>
          </a>
          <a
            className="block text-lg"
            href="#skill"
            onClick={() => setIsOpen(false)}
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            <span className="hover:bg-gray-200 hover:font-semibold dark:hover:bg-white/20 px-2.5 py-2 rounded">
              Skills
            </span>
          </a>
          <a
            className="block text-lg"
            href="#project"
            onClick={() => setIsOpen(false)}
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            <span className="hover:bg-gray-200 hover:font-semibold dark:hover:bg-white/20 px-2.5 py-2 rounded">
              Projects
            </span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
