import { LinkIcon } from "lucide-react";
import React from "react";

import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialSection = () => {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/devsagarkumarjha/",
      icon: FaLinkedin,
      className: "",
    },
    {
      url: "https://www.x.com/DevSagarKrJha/",
      icon: FaXTwitter,
      className: "",
    },
    {
      url: "https://github.com/DevSagarKumarJha",
      icon: FaGithub,
      className: "",
    },
    {
      url: "https://www.instagram.com/devsagarkumarjha/",
      icon: FaInstagram,
      className: "",
    },
  ];
  return (
    <div className="border  border-gray-800/10 dark:border-gray-200/10  p-2  rounded">
      <h2 className="text-sm font-semibold flex md:py-2 justify-center items-center gap-1 ">
        {" "}
        Connect Me <LinkIcon className="text-yellow-400 size-3" />
      </h2>
      <hr className=" border-gray-800/10 dark:border-gray-200/10 " />
      <ul className="mt-4 flex justify-center gap-2">
        {socialLinks.map((socialLink, i) => (
          <li
            key={i}
            className="rounded-full hover:opacity-40 border w-fit p-1 border-gray-800/10 dark:border-gray-200/10 text-center shadow"
          >
            <Link target="_blank" to={socialLink.url}>
              <socialLink.icon size={18} className={socialLink.className} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSection;
