import { motion } from "framer-motion";
import { aboutContent } from "../data/content";
import MarqueeStrip from "./MarqueeStrip";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 text-midnight">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent2">
              {aboutContent.eyebrow}
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-midnight">
              {aboutContent.title}
            </h2>
            <p className="text-base text-coal/80">{aboutContent.description}</p>
            <p className="text-base text-coal/80">{aboutContent.secondary}</p>
            <ul className="space-y-2 text-sm text-coal/80">
              {aboutContent.quickFacts.map((fact) => (
                <li key={fact}>• {fact}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[40px] border border-mist bg-cloud p-4 shadow-card">
              <img
                src="/assets/about-people.png"
                alt="Cleaner specialist"
                className="w-full rounded-[30px] object-cover"
              />
              <div className="absolute -left-6 -top-6 rounded-2xl bg-midnight px-4 py-3 text-sm font-semibold text-white shadow-card">
                HIGHEST LEVEL OF SERVICE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-16">
        <MarqueeStrip text={aboutContent.marquee} />
      </div>
    </section>
  );
};

export default AboutSection;
