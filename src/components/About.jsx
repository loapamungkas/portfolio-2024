import React from "react";
import { useCustomCursor } from "../context/CustomCursorContext";
import Icon from "@mdi/react";
import { mdiInstagram, mdiGithub, mdiLinkedin } from "@mdi/js";

const About = () => {
  const { enlargeCursor, shrinkCursor } = useCustomCursor();
  return (
    <>
      <section id="aboutme" className="pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full border-2 border-white">
              <img
                alt=""
                src="/PasFoto.png"
                className="absolute inset-0 h-full w-full object-cover"
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              />
            </div>

            <div className="lg:py-24">
              <h2
                className="text-3xl font-bold sm:text-4xl text-center lg:text-start text-mainBlack dark:text-white"
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              >
                About Me
              </h2>

              <p
                className="mt-4 text-gray-600 text-justify  dark:text-gray-200"
                onMouseEnter={enlargeCursor}
                onMouseLeave={shrinkCursor}
              >
                Hello! I am a Web Developer and Graphic Designer with a strong
                educational background and experience in both of these fields.
                Combining design creativity with technical web development
                skills, I strive to create aesthetic, functional and innovative
                solutions.
              </p>
              <div className="flex flex-row gap-5 justify-center lg:justify-start">
                <a
                  href="https://github.com/loapamungkas"
                  target="_blank"
                  className="rounded-md mt-8 inline-block px-2.5 py-2.5 text-sm shadow bg-blue-600 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-700"
                  onMouseEnter={enlargeCursor}
                  onMouseLeave={shrinkCursor}
                >
                  <div className="text-white">
                    <Icon path={mdiGithub} size={1} className="fill-current" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/loa-pamungkas-1b9416224/"
                  target="_blank"
                  className="rounded-md mt-8 inline-block px-2.5 py-2.5 text-sm shadow bg-blue-600 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-700"
                  onMouseEnter={enlargeCursor}
                  onMouseLeave={shrinkCursor}
                >
                  <div className="text-white">
                    <Icon
                      path={mdiLinkedin}
                      size={1}
                      className="fill-current"
                    />
                  </div>
                </a>
                <a
                  href="https://instagram.com/loapamungkas_"
                  target="_blank"
                  className="rounded-md mt-8 inline-block px-2.5 py-2.5 text-sm shadow bg-blue-600 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-700"
                  onMouseEnter={enlargeCursor}
                  onMouseLeave={shrinkCursor}
                >
                  <div className="text-white">
                    <Icon
                      path={mdiInstagram}
                      size={1}
                      className="fill-current"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
