import { useState } from "react";
import {projects} from "../data"

const techColors = {
  React: "bg-cyan-500 text-black",
  "Tailwind CSS": "bg-blue-400 text-black",
  TypeScript: "bg-blue-600 text-black",
  JavaScript: "bg-yellow-600 text-black",
  "Next.js": "bg-black  text-black",
};

const ProjectCard = ({ name, url, description, techStack, image, status }) => {
  const isComingSoon = status === "coming-soon";

  return (
    <article
      className={`relative border rounded-lg mx-auto p-4 shadow-sm transition duration-200 space-y-2 border-gray-300 dark:border-gray-700 w-full ${
        isComingSoon ? "opacity-40 blur-[1px] pointer-events-none" : ""
      }`}
      aria-disabled={isComingSoon}
    >
      {image && (
        <img
          src={image}
          width={40} // or an appropriate value
          height={40}
          alt={name}
          className="w-10 h-10 object-contain mb-1"
        />
      )}

      <a
        href={isComingSoon ? "#" : url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-lg font-semibold ${
          isComingSoon
            ? "text-gray-500"
            : "text-blue-600 hover:underline dark:text-blue-400"
        }`}
      >
        {name}
      </a>

      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

      {techStack?.length > 0 && (
        <div
          className="flex flex-wrap gap-2 pt-1"
          aria-label="Technology stack"
        >
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                techColors[tech] || "bg-gray-500"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {isComingSoon && (
        <div className="absolute top-2 right-2 text-xs font-bold uppercase text-gray-400">
          Coming Soon
        </div>
      )}
    </article>
  );
};

const Project = () => {
  const [showAll, setShowAll] = useState(false);


  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      aria-labelledby="projects-heading"
      role="region"
      className="w-full border border-gray-800/10 dark:border-gray-200/10 rounded p-4"
    >
      <header className="mb-4">
        <h1
          id="projects-heading"
          className="text-sm lg:text-2xl font-semibold flex justify-center items-center"
        >
          🧩 My Products
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {projects.length > 2 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            aria-expanded={showAll}
            aria-controls="project-list"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
