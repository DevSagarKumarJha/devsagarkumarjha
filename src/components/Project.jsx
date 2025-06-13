const techColors = {
  React: "bg-cyan-500",
  "Tailwind CSS": "bg-blue-400",
  TypeScript: "bg-blue-600",
  JavaScript: "bg-yellow-600",
  "Next.js": "bg-black text-white",
};

const ProjectCard = ({ name, url, description, techStack, image, status }) => {
  const isComingSoon = status === "coming-soon";

  const baseCardClass =
    "relative border rounded-lg p-4 shadow-sm transition duration-200 space-y-2";
  const cardBorder = "border-gray-300 dark:border-gray-700";
  const cardEffect = isComingSoon
    ? "opacity-40 blur-[1px] pointer-events-none"
    : "";

  return (
    <div className={`${baseCardClass} ${cardBorder} ${cardEffect}`}>
      {image && (
        <img src={image} alt={name} className="w-10 h-10 object-contain mb-1" />
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
        <div className="flex flex-wrap gap-2 pt-1">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded-full text-white ${
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
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      name: "ZenUi",
      url: "https://zenui.dev",
      description:
        "A modern, elegant React UI component library built with Tailwind CSS that prioritizes accessibility and focus management while enabling lightning fast development for javascript developers.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      status: "published",
    },
    {
      name: "NextProject",
      url: "#",
      description: "Something awesome is coming soon. Stay tuned!",
      techStack: [],
      status: "coming-soon",
    },
  ];

  return (
    <section className="w-full p-4 border border-gray-800/10 dark:border-gray-200/10 rounded">
      <h1 className="text-sm lg:text-2xl font-semibold flex justify-center items-center mb-4">
        My Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
