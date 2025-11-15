import { motion } from "framer-motion";
import { PiPhoneCallBold } from "react-icons/pi";
import { badges, heroDetails } from "../data/content";

const Hero = () => {
  const handleCtaClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-midnight pb-20 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {heroDetails.subTitle}
          </p>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {heroDetails.title}
          </motion.h1>
          <p className="mt-6 text-base text-white/75 lg:text-lg">
            {heroDetails.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleCtaClick}
              className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5"
            >
              {heroDetails.buttonLabel}
            </button>
            <a
              href="tel:+13944955993"
              className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PiPhoneCallBold className="text-base text-accent" />
              {heroDetails.secondaryLabel}
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left"
              >
                <p className="text-2xl font-semibold text-accent">{badge.label}</p>
                <p className="text-sm text-white/70">{badge.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative">
            <div className="relative rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-card">
              <div className="rounded-[30px] bg-gradient-to-b from-white/10 to-transparent p-4">
                <img
                  src="/assets/hero.png"
                  alt="Cleaner professional"
                  className="mx-auto h-[420px] w-auto object-contain"
                />
              </div>
              <div className="pointer-events-none absolute -right-6 top-10 hidden w-24 lg:block">
                <img src="/assets/hero-badge.png" alt="Badge" />
              </div>
              <div className="absolute -bottom-10 left-1/2 w-48 -translate-x-1/2">
                <img src="/assets/hero-card.png" alt="Service card" />
              </div>
            </div>
            <div className="absolute -left-32 top-12 hidden h-64 w-64 rounded-full bg-accent/20 blur-3xl lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
