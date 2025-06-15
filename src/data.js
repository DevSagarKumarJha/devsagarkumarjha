import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaJava,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
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

const projects = [
  {
    name: "ZenUi",
    url: "https://zenui.dev",
    description:
      "A modern, elegant React UI component library built with Tailwind CSS that prioritizes accessibility and focus management while enabling lightning fast development.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    status: "published",
  },
  {
    name: "CodeScore",
    url: "https://codescore.co.in",
    description:
      "A coding platform with resizable panels, editor tabs, leaderboard, and test case handling — inspired by LeetCode.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    status: "coming-soon",
  },
];

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

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/devsagarkumarjha/",
    icon: FaLinkedin,
    className: "",
  },
  {
    name: "Twitter (X)",
    url: "https://www.x.com/DevSagarKrJha/",
    icon: FaXTwitter,
    className: "",
  },
  {
    name: "GitHub",
    url: "https://github.com/DevSagarKumarJha",
    icon: FaGithub,
    className: "",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/devsagarkumarjha/",
    icon: FaInstagram,
    className: "",
  },
];

export { projects, skills, socialLinks };
