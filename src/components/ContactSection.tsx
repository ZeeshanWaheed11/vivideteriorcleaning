import { motion } from "framer-motion";
import { PiEnvelopeSimpleBold, PiPhoneCallBold } from "react-icons/pi";
import { contactContent } from "../data/content";

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
            {contactContent.eyebrow}
          </span>
          <h2 className="text-3xl font-semibold text-midnight">{contactContent.title}</h2>
          <p className="text-base text-coal/80">{contactContent.body}</p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-2 text-sm text-coal/80">
            {contactContent.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:justify-center">
            {contactContent.phones.map((phone) => (
              <a
                key={phone.value}
                href={`tel:${phone.value.replace(/[^\\d]/g, "")}`}
                className="flex items-center justify-center gap-3 rounded-full border border-mist bg-white px-6 py-3"
              >
                <PiPhoneCallBold className="text-lg text-accent" />
                {phone.label}: {phone.value}
              </a>
            ))}
            <a
              href={`mailto:${contactContent.email}`}
              className="flex items-center justify-center gap-3 rounded-full border border-mist bg-white px-6 py-3"
            >
              <PiEnvelopeSimpleBold className="text-lg text-accent" />
              {contactContent.email}
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-coal/70">
            {contactContent.serviceHours}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
