import React from "react";

const Project = () => {
  const projects = [
    {
      name: "ZenUi",
      url: "https://zenui.dev",
    },
  ];

  return (
    <div className="border w-1/2 border-gray-800/10 dark:border-gray-200/10  p-2  rounded">
      <h1 className="text-sm font-semibold flex md:py-2 justify-center items-center gap-1">
        My Products
      </h1>
      <hr className="border-gray-800/10 dark:border-gray-200/10 mb-2" />
      <ol className="list-decimal list-inside space-y-1">
        {projects.map((project, i) => (
          <li key={i}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Project;
