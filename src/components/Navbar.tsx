import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiListBold, PiXBold } from "react-icons/pi";
import { brandInfo, navLinks } from "../data/content";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <a href="#hero" className="flex flex-col text-midnight">
          <span className="text-lg font-semibold">{brandInfo.name}</span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-coal/70">
            {brandInfo.tagline}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-coal/80 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="transition hover:text-accent2"
              onClick={() => handleAnchorClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <button
            onClick={() => handleAnchorClick("#contact")}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Get a Free Quote
          </button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <PiXBold className="text-2xl text-midnight" />
          ) : (
            <PiListBold className="text-2xl text-midnight" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="space-y-4 bg-white px-4 pb-8 pt-2 text-lg font-semibold text-midnight">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="block w-full text-left py-2"
                  onClick={() => handleAnchorClick(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleAnchorClick("#contact")}
                className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              >
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
