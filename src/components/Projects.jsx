import React from "react";
import { useCustomCursor } from "../context/CustomCursorContext";
import Card from "./Card";

const Projects = () => {
  const { enlargeCursor, shrinkCursor } = useCustomCursor();
  const projects = [
    {
      category: "Front-End Developer",
      title: "Footsync",
      tools: ["React", "Tailwind"],
      year: "2024",
      role: "Personal Project",
      link_github: "https://github.com/loapamungkas/footsync-app",
      link_demo: "https://footsync-app.vercel.app/",
      photo_path: "footsync",
    },
    {
      category: "Front-End Developer",
      title: "Aromaterapy",
      tools: ["React", "Tailwind"],
      year: "2024",
      role: "Personal Project",
      link_github: "#",
      link_demo: "#",
      photo_path: "aromatherapy",
    },
    {
      category: "Front-End Developer",
      title: "Aroma Food App",
      tools: ["React", "Tailwind"],
      year: "2024",
      role: "Personal Project",
      link_github: "https://github.com/loapamungkas/aroma-food-app",
      link_demo: "https://aroma-food-app.vercel.app/",
      photo_path: "aroma",
    },
    {
      category: "Full-Stack Developer",
      title: "Chat App Realtime",
      tools: ["React", "Firebase"],
      year: "2024",
      role: "Personal Project",
      link_github: "https://github.com/loapamungkas/chat-app-test",
      link_demo: "https://chat-app-test-psi.vercel.app/",
      photo_path: "chatapp",
    },
    {
      category: "Full-Stack Developer",
      title: "Go Adventure App",
      tools: ["PHP", "Laravel"],
      year: "2023",
      role: "Freelance",
      link_github: "https://github.com/loapamungkas/go-adventure-backend",
      link_demo: "#",
      photo_path: "goadventurebackend",
    },
    {
      category: "Front-End Developer",
      title: "Go Adventure Landing Page",
      tools: ["HTML", "CSS", "Javascript"],
      year: "2023",
      role: "Freelance",
      link_github: "https://github.com/loapamungkas/go-adventure-html",
      link_demo: "https://go-adventure-html.vercel.app/",
      photo_path: "goadventure",
    },
  ];
  return (
    <>
      <section id="project" className="pt-24 sm:pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-mainBlack dark:text-white">
            Projects
          </h2>
          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-5 place-content-between mt-5 py-5`}
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            {projects.map((project, index) => {
              return (
                <Card
                  key={index}
                  category={project.category}
                  title={project.title}
                  tools={project.tools}
                  year={project.year}
                  role={project.role}
                  link_github={project.link_github}
                  link_demo={project.link_demo}
                  photo_path={project.photo_path}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8"
      >
        <div className="flex flex-col items-center gap-10">
          <h2
            className="text-4xl sm:text-7xl font-bold text-center text-mainBlack dark:text-white"
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            Let’s Make Great
            <br /> Work Together
          </h2>
          <a
            className="rounded-md px-5 py-2.5 text-sm font-medium shadow bg-blue-600 dark:bg-gray-300 hover:bg-blue-700 dark:hover:bg-gray-200 text-white dark:text-mainBlack"
            href="mailto:loapamungkas04@gmail.com"
            target="_blank"
            onMouseEnter={enlargeCursor}
            onMouseLeave={shrinkCursor}
          >
            Start A Project
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
