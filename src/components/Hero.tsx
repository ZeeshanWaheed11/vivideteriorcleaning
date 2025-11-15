import { motion } from "framer-motion";
import { PiPhoneCallBold, PiCheckCircleBold } from "react-icons/pi";
import { badges, heroContent } from "../data/content";

const Hero = () => {
  const handleCtaClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white pb-24 pt-20">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-b from-accent/15 via-transparent to-transparent lg:block" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
            {heroContent.eyebrow}
          </p>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-midnight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {heroContent.headline}
          </motion.h1>
          <p className="mt-6 text-lg font-medium text-coal/80">{heroContent.subHeadline}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleCtaClick}
              className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              {heroContent.primaryCta}
            </button>
            <a
              href={`tel:${heroContent.phone.replace(/[^\\d]/g, "")}`}
              className="flex items-center justify-center gap-3 rounded-full border border-mist bg-white px-6 py-4 text-sm font-semibold text-midnight transition hover:shadow-card"
            >
              <PiPhoneCallBold className="text-base text-accent2" />
              Call {heroContent.phone}
            </a>
          </div>
          <p className="text-sm font-semibold text-coal/80">{heroContent.secondaryLine}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-3xl border border-mist bg-cloud p-4 text-left shadow-sm"
              >
                <p className="text-base font-semibold text-accent2">{badge.label}</p>
                <p className="text-sm text-coal/80">{badge.description}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-3 text-sm text-coal/90">
            {heroContent.trustBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <PiCheckCircleBold className="mt-0.5 text-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative">
            <div className="relative rounded-[40px] border border-mist bg-cloud p-6 shadow-card">
              <div className="rounded-[30px] bg-white p-4">
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
            <div className="absolute -left-16 top-12 hidden h-64 w-64 rounded-full bg-accent/20 blur-3xl lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
