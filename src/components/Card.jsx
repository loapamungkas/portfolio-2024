import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiArrowTopRight,
  mdiGithub,
  mdiReact,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguagePhp,
  mdiLaravel,
  mdiFirebase,
  mdiTailwind,
} from "@mdi/js";

const getIconPath = (iconName) => {
  switch (iconName) {
    case "mdiReact":
      return mdiReact;
    case "mdiTailwind":
      return mdiTailwind;
    case "mdiLanguageHtml5":
      return mdiLanguageHtml5;
    case "mdiLanguageCss3":
      return mdiLanguageCss3;
    case "mdiLanguageJavascript":
      return mdiLanguageJavascript;
    case "mdiLanguagePhp":
      return mdiLanguagePhp;
    case "mdiLaravel":
      return mdiLaravel;
    case "mdiFirebase":
      return mdiFirebase;
    // Tambahkan case untuk ikon lain jika diperlukan
    default:
      return "";
  }
};

const Card = ({
  title,
  tools,
  year,
  category,
  role,
  link_demo,
  link_github,
  photo_path,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div role="status" className="p-4 rounded-lg shadow-xl animate-pulse">
          <div className="flex items-center justify-center h-52 mb-4 bg-gray-300 rounded">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="flex justify-between">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>

          <div className="flex justify-between items-center mt-6">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="block rounded-lg p-4 shadow-xl group relative transition-all hover:scale-105">
          <div className="relative">
            <img
              alt=""
              src={`/project/${photo_path}.png`}
              className="h-full md:h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg-black backdrop-blur-sm bg-opacity-30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={link_github}
                target="_blank"
                className="rounded-md flex items-center pe-2 py-2 text-sm shadow dark:bg-mainBlack dark:hover:bg-mainBlack/80 bg-gray-100 hover:bg-gray-200"
              >
                <div className="text-mainBlack dark:text-white px-2">
                  <Icon path={mdiGithub} size={1} className="fill-current" />
                </div>
                <p className="text-mainBlack dark:text-white">Github</p>
              </a>
              <a
                href={link_demo}
                target="_blank"
                className="rounded-md flex items-center pe-2 py-2 text-sm shadow dark:bg-mainBlack dark:hover:bg-mainBlack/80 bg-gray-100 hover:bg-gray-200"
              >
                <div className="text-mainBlack dark:text-white px-2">
                  <Icon
                    path={mdiArrowTopRight}
                    size={1}
                    className="fill-current"
                  />
                </div>
                <p className="text-mainBlack dark:text-white">Demo</p>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <dl>
              <div className="flex justify-between text-mainBlack dark:text-gray-100">
                <dt className="sr-only">Categories</dt>
                <p className="text-sm">{category}</p>
                <p className="text-sm">{year}</p>
              </div>
              <div>
                <dt className="sr-only">Name</dt>
                <p className="font-semibold text-lg text-mainBlack dark:text-white">
                  {title}
                </p>
              </div>
            </dl>
            <div className="mt-2 flex justify-between items-center gap-8 text-xs">
              <div className="inline-flex shrink-0 items-center gap-2">
                <p className="text-gray-500 dark:text-gray-100 text-xs">
                  Tools :{" "}
                </p>
                {tools.map((tool, index) => {
                  return (
                    <div key={index} className="text-mainBlack dark:text-white">
                      <Icon
                        path={getIconPath(tool)}
                        size={1}
                        className="fill-current"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="inline-flex shrink-0 items-center gap-2">
                <p className="text-gray-500 dark:text-gray-100">Role : </p>
                <p className="font-medium text-mainBlack dark:text-white">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
