import { LinkIcon } from "lucide-react";
import React from "react";
import { socialLinks } from "../data";

const SocialSection = () => {
  return (
    <aside
      className="md:w-1/4 border border-gray-800/10 dark:border-gray-200/10 p-4 rounded shadow-sm"
      aria-labelledby="connect-heading"
    >
      <header className="text-center mb-2">
        <h2
          id="connect-heading"
          className="text-sm font-semibold flex justify-center items-center gap-1"
        >
          Connect With Me <LinkIcon className="text-yellow-400 size-3" />
        </h2>
        <hr className="border-gray-300 dark:border-gray-600 mt-1" />
      </header>

      <ul className="flex flex-wrap justify-center items-center my-10 gap-2" role="list">
        {socialLinks.map((socialLink, i) => (
          <li key={i}>
            <a
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.name}
              className="inline-flex items-center justify-center border p-2 rounded-full hover:opacity-60 transition"
            >
              <socialLink.icon size={18} className={socialLink.className} />
              <span className="sr-only">{socialLink.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SocialSection;
