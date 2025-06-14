import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Optional: for hamburger icon

const Navbar = () => {
  const location = useLocation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < prevScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`z-50 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } sticky top-0`}
    >
      <div className="flex justify-between items-center mx-auto bg-gray-200/20 dark:bg-black/10 text-gray-950 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-gray-800/10 md:max-w-5xl rounded-md px-4 py-2">
        <Link to="/" className="p-1">
          <img src={logo} alt="logo" className="w-28 invert dark:invert-0" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map((navItem, i) => (
            <li key={i}>
              <Link
                to={navItem.link}
                className={`px-3 py-1 rounded-md transition-colors font-semibold ${
                  location.pathname === navItem.link
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "hover:bg-gray-300/50 dark:hover:bg-gray-700/30 dark:text-white"
                }`}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute w-full h-fit   flex flex-col items-center gap-2 py-4 bg-white dark:bg-gray-900 shadow-md border-t border-gray-300 dark:border-gray-700">
          {navItems.map((navItem, i) => (
            <li key={i} className="w-full px-2">
              <Link
                to={navItem.link}
                className={`block px-4 py-2 rounded-md text-center w-full ${
                  location.pathname === navItem.link
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
