import React from "react";
import { useCustomCursor } from "../context/CustomCursorContext";

const Footer = () => {
  const { enlargeCursor, shrinkCursor } = useCustomCursor();
  return (
    <footer className="bg-gray-100 dark:bg-mainBlack">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="relative z-50">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full p-2 text-white shadow transition sm:p-3 lg:p-4 bg-blue-600 hover:bg-blue-700 dark:bg-gray-600 dark:hover:bg-gray-500"
              href="#"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div
                className="flex justify-center text-teal-600 lg:justify-start"
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              >
                <span className="sr-only">Home</span>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 370 370"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-600 dark:fill-white"
                >
                  <path d="M160.858 0.5H10C4.47715 0.5 0 4.97716 0 10.5V360C0 365.523 4.47715 370 10 370H160.358C169.267 370 173.729 359.229 167.429 352.929L7.07107 192.571C3.16582 188.666 3.16583 182.334 7.07107 178.429L167.929 17.5711C174.229 11.2714 169.767 0.5 160.858 0.5Z" />
                  <path d="M309.142 0H360C365.523 0 370 4.47715 370 9.99999V360C370 365.523 365.523 370 360 370H309.142C306.49 370 303.946 368.946 302.071 367.071L127.071 192.071C123.166 188.166 123.166 181.834 127.071 177.929L302.071 2.92893C303.946 1.05357 306.49 0 309.142 0Z" />
                </svg>
              </div>

              <p
                className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-100 lg:text-left"
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              >
                I'm a Web Developer and Graphic Designer, combining creativity
                with technical skills to craft aesthetic and functional
                solutions. Welcome to my portfolio!
              </p>
            </div>

            <ul
              className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <li>
                <a
                  className="text-gray-700 dark:text-gray-100 transition "
                  href="#aboutme"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-gray-100 transition "
                  href="#skill"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-gray-100 transition "
                  href="#project"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <p
            className="mt-12 text-center text-sm text-gray-500 dark:text-gray-100 lg:text-right"
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            Copyright &copy; 2024 Loa Pamungkas. All rights reserved.
          </p>
        </div>
        <div className="absolute inset-x-0 grid grid-cols-2 end-4 top-24 opacity-40 dark:opacity-20">
          <div className="blur-[60px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          <div className="blur-[60px] h-56 bg-gradient-to-br from-blue-700 to-purple-400 dark:from-blue-700"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
