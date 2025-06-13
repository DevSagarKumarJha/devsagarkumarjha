import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "C", Logo: SiC, className: "text-blue-500" },
    { name: "C++", Logo: SiCplusplus, className: "text-blue-500" },
    { name: "Java", Logo: FaJava, className: "text-amber-500" },
    { name: "Javascript", Logo: SiJavascript, className: "text-yellow-500" },
    { name: "Typescript", Logo: SiTypescript, className: "text-blue-500" },
    { name: "NodeJs", Logo: SiNodedotjs, className: "text-green-600" },
    { name: "React", Logo: SiReact, className: "text-cyan-600" },
    {
      name: "Next.js",
      Logo: SiNextdotjs,
      className: "text-black dark:text-white",
    },
    { name: "MongoDB", Logo: SiMongodb, className: "text-green-500" },
    { name: "Prisma", Logo: SiPrisma, className: "text-cyan-800" },
    { name: "PostgreSQL", Logo: BiLogoPostgresql, className: "text-blue-800" },
  ];

  return (
    <section
      className="border w-full border-gray-800/10 dark:border-gray-200/10 p-2 rounded"
      aria-labelledby="skills-heading"
    >
      <header className="flex flex-col items-center">
        <h2
          id="skills-heading"
          className="text-sm font-semibold flex md:py-2 justify-center items-center gap-1"
        >
          My Skills
        </h2>
        <hr className="w-full border-gray-800/10 dark:border-gray-200/10" />
      </header>
      <ul className="mt-4 flex flex-wrap justify-center gap-4" role="list">
        {skills.map((skill, i) => {
          const Logo = skill.Logo;
          return (
            <li
              key={i}
              className="flex flex-col items-center text-xs hover:opacity-60 transition-opacity duration-150"
            >
              <Logo size={28} className={skill.className} aria-hidden="true" />
              <span className="mt-1">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillSection;
