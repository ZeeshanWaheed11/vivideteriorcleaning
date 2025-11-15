import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { galleryImages } from "../data/content";

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-cloud py-20 text-midnight">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          subtitle="GALLERY"
          title="Best cleaning company in the town"
          description="Our team of experts who have been in the profession for years focuses on helping you achieve optimal clean surface."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-[30px] border border-mist bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <img
                src={src}
                alt={`Cleaning gallery ${index + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
