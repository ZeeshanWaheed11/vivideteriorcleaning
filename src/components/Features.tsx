import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { features } from "../data/content";

const Features = () => {
  return (
    <section className="bg-white py-20 text-midnight">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          subtitle="WHAT WE DO"
          title="Your comfort is our main priority"
          description="Our professional dental clinic offers the whole range of dentistry services: treatment of caries, gum diseases, tooth whitening, implantation, dentures, surgery, etc."
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-mist bg-cloud p-6"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-midnight">{feature.title}</h3>
              <p className="mt-3 text-sm text-coal/80">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
