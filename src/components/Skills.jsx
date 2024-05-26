import React from "react";
import { useCustomCursor } from "../context/CustomCursorContext";

const Skills = () => {
  const { enlargeCursor, shrinkCursor } = useCustomCursor();
  return (
    <>
      <section
        id="skill"
        className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8"
      >
        <h2
          className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-mainBlack dark:text-white"
          onMouseEnter={enlargeCursor}
          onMouseLeave={shrinkCursor}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-5">
          <div className="lg:py-12">
            <h2
              className="text-2xl font-bold sm:text-3xl text-center lg:text-start text-mainBlack dark:text-white"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Front-End Developer
            </h2>

            <p
              className="mt-4 text-gray-600 text-justify dark:text-gray-200"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              As a front-end developer, I bring web designs to life, ensuring
              seamless user experiences through clean and responsive interfaces.
            </p>
          </div>
          <div className="relative rounded-lg  lg:order-last lg:py-12 lg:ps-48 text-mainBlack dark:text-white">
            <p
              className="text-lg font-bold"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Abilities
            </p>
            <ul
              className="mt-4 list-disc list-inside grid grid-cols-3 place-content-between gap-1 lg:grid-cols-2"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
        <span className="flex items-center my-10 lg:my-0">
          <span className="h-px flex-1 bg-gray-600"></span>
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-12">
            <h2
              className="text-2xl font-bold sm:text-3xl text-center lg:text-start text-mainBlack dark:text-white"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Back-End Developer
            </h2>

            <p
              className="mt-4 text-gray-600 text-justify dark:text-gray-200"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              In back-end development, I architect robust and scalable
              solutions, handling server-side logic to empower dynamic and
              efficient digital experiences.
            </p>
          </div>
          <div className="relative rounded-lg  lg:order-last lg:py-12 lg:ps-48 text-mainBlack dark:text-white">
            <p
              className="text-lg font-bold"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Abilities
            </p>
            <ul
              className="mt-4 list-disc list-inside grid grid-cols-3 place-content-between gap-1 lg:grid-cols-2"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <li>PHP</li>
              <li>MySQL</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
        <span className="flex items-center my-10 lg:my-0">
          <span className="h-px flex-1 bg-gray-600"></span>
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-12">
            <h2
              className="text-2xl font-bold sm:text-3xl text-center lg:text-start text-mainBlack dark:text-white"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Graphic Design
            </h2>

            <p
              className="mt-4 text-gray-600 text-justify dark:text-gray-200"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              My expertise in digital design transforms concepts into visually
              captivating experiences, blending creativity and functionality for
              impactful user interfaces.
            </p>
          </div>
          <div className="relative rounded-lg  lg:order-last lg:py-12 lg:ps-48 text-mainBlack dark:text-white">
            <p
              className="text-lg font-bold"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              Abilities
            </p>
            <ul
              className="mt-4 list-disc list-inside grid grid-cols-2 place-content-between gap-1 lg:grid-cols-2"
              onMouseEnter={enlargeCursor}
              onMouseLeave={shrinkCursor}
            >
              <li>Logo Design</li>
              <li>Poster Design</li>
              <li>Feed Design</li>
              <li>Banner Design</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
