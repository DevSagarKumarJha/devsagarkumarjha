import React from "react";
import { skills } from "../data";

const SkillSection = () => {
  return (
    <section
      className="w-full border border-gray-800/10 dark:border-gray-200/10 p-4 rounded shadow-sm"
      aria-labelledby="skills-heading"
    >
      <header className="text-center mb-2">
        <h2 id="skills-heading" className="text-base font-semibold">
          My Skills💪
        </h2>
        <hr className="border-gray-300 dark:border-gray-600 mt-1" />
      </header>

      <ul className="mt-4 flex flex-wrap justify-center items-center gap-4" role="list">
        {skills.map((skill, i) => {
          const Logo = skill.Logo;
          return (
            <li
              key={i}
              className="flex flex-col items-center text-xs hover:opacity-60 transition-opacity"
            >
              <Logo className={skill.className} aria-hidden="true" />
              <span className="mt-1 text-sm">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillSection;
