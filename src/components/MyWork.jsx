import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const languageColors = {
  JavaScript: "bg-yellow-300 text-yellow-800",
  TypeScript: "bg-blue-300 text-blue-800",
  Python: "bg-green-300 text-green-800",
  HTML: "bg-orange-300 text-orange-800",
  CSS: "bg-purple-300 text-purple-800",
  Shell: "bg-gray-300 text-gray-800",
  default: "bg-gray-200 text-gray-800",
};

const ProjectCard = ({ repo, badgeClass, align = "left" }) => (
  <div
    className={`bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 w-full max-w-sm ${
      align === "right" ? "text-right" : ""
    }`}
  >
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
      <FaGithub className="text-base" />
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </h3>
    <p className="text-sm text-gray-500">
      Created: {format(new Date(repo.created_at), "MMM dd, yyyy")}
    </p>
    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
      {repo.description || "No description provided."}
    </p>
    <div
      className={`mt-2 flex flex-wrap gap-2 text-xs ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      {repo.language && (
        <span className={`px-2 py-0.5 rounded ${badgeClass}`}>
          {repo.language}
        </span>
      )}
      {repo.topics?.map((topic) => (
        <span
          key={topic}
          className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {topic}
        </span>
      ))}
    </div>
  </div>
);

const MyWorks = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/devsagarkumarjha/repos"
        );
        const sorted = res.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRepos(sorted);
      } catch (err) {
        console.error("Failed to fetch repos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="text-center">Loading projects...</p>;

  const visibleRepos = showAll ? repos : repos.slice(0, 2);

  return (
    <section className="w-full max-w-7xl mx-auto p-4 border h-fit border-gray-800/10 dark:border-gray-200/10 rounded">
      <h2 className="text-sm lg:text-2xl font-semibold flex justify-center items-center mb-4">
        🛠 My Works
      </h2>

      <div className="relative w-full">
        {/* Vertical timeline line */}
        <div className="absolute top-0 hidden md:block md:left-[50%] md:-translate-x-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 z-10" />

        {visibleRepos.map((repo, i) => {
          const isLeft = i % 2 === 0;
          const badgeClass =
            languageColors[repo.language] || languageColors.default;
          const MotionDiv = motion.div;
          return (
            <MotionDiv
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-center"
            >
              {/* Left side (desktop only) */}
              <div
                className={`hidden md:flex justify-end w-1/2 pr-8 ${
                  isLeft ? "" : "invisible"
                }`}
              >
                {isLeft && (
                  <ProjectCard
                    repo={repo}
                    badgeClass={badgeClass}
                    align="right"
                  />
                )}
              </div>

              {/* Timeline dot */}
              <div className="z-10 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm relative">
                <FaGithub className="text-xs" />
              </div>

              {/* Right side (desktop only) */}
              <div
                className={`hidden md:flex justify-start w-1/2 pl-8 ${
                  isLeft ? "invisible" : ""
                }`}
              >
                {!isLeft && (
                  <ProjectCard
                    repo={repo}
                    badgeClass={badgeClass}
                    align="left"
                  />
                )}
              </div>

              {/* Mobile full-width fallback */}
              <div className="md:hidden mt-4 w-full">
                <ProjectCard repo={repo} badgeClass={badgeClass} />
              </div>
            </MotionDiv>
          );
        })}

        {!showAll && repos.length > 2 && (
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent blur-sm pointer-events-none" />
        )}
      </div>

      {repos.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default MyWorks;
