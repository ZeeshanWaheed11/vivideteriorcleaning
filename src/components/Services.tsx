import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { services } from "../data/content";

const Services = () => {
  return (
    <section id="services" className="bg-cloud py-20 text-midnight">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          subtitle="SERVICES"
          title="We provide our best cleaning services for you"
          description="Our company provides a wide range of cleaning services, from home cleaning to office cleaning. We use only advanced technologies to keep your room looking the best."
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl border border-mist bg-white p-6 shadow-card transition hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight text-white">
                <service.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-midnight">{service.title}</h3>
              <p className="mt-3 text-sm text-slate">{service.description}</p>
              <button className="mt-6 text-sm font-semibold text-accent2 transition group-hover:translate-x-1">
                Discover More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
