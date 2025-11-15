import { motion } from "framer-motion";
import { stats } from "../data/content";

const StatsSection = () => {
  return (
    <section className="bg-white py-16 text-midnight">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-mist bg-cloud px-6 py-12 text-center shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent2">
          Happy Customers & Counting
        </p>
        <h3 className="mt-4 text-3xl font-semibold text-midnight">
          We appreciate your trust greatly.
        </h3>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-4xl font-bold text-accent2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-coal/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
