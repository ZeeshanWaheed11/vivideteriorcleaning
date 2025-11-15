import { motion } from "framer-motion";
import { PiEnvelopeSimpleBold, PiPhoneCallBold } from "react-icons/pi";
import { contactInfo } from "../data/content";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 text-midnight">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-mist bg-cloud px-6 py-12 shadow-card">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            CONTACT US
          </span>
          <h2 className="text-3xl font-semibold text-midnight">{contactInfo.title}</h2>
          <p className="text-base text-coal/80">{contactInfo.body}</p>
          <div className="mt-8 flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:justify-center">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 rounded-full border border-mist bg-white px-6 py-3"
            >
              <PiPhoneCallBold className="text-lg text-accent" />
              Call Us: {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-3 rounded-full border border-mist bg-white px-6 py-3"
            >
              <PiEnvelopeSimpleBold className="text-lg text-accent" />
              {contactInfo.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
