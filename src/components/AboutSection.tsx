import { motion } from "framer-motion";
import { workingHours } from "../data/content";
import MarqueeStrip from "./MarqueeStrip";

const AboutSection = () => {
  return (
    <section id="about" className="bg-midnight py-20 text-white">
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
              WHO WE ARE
            </span>
            <h2 className="text-4xl font-semibold leading-tight">
              Your comfort is our main priority
            </h2>
            <p className="text-base text-white/70">
              We appreciate your trust greatly. Our patients choose our clinic because they know we are the best in the field.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Working Hours
              </p>
              <div className="mt-4 space-y-3 text-lg font-semibold">
                {workingHours.map((slot) => (
                  <div key={slot.label} className="flex items-center justify-between text-white">
                    <span>{slot.label}</span>
                    <span className="text-accent">{slot.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Discover More
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-4">
              <img
                src="/assets/about-people.png"
                alt="Cleaner specialist"
                className="w-full rounded-[30px] object-cover"
              />
              <div className="absolute -left-6 -top-6 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-midnight">
                HIGHEST LEVEL OF SERVICE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-16">
        <MarqueeStrip text="ABOUT US" />
      </div>
    </section>
  );
};

export default AboutSection;
