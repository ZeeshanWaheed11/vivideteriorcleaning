import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/content";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-cloud py-20 text-midnight">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent2">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            What local owners say about VIVID
          </h2>
          <p className="mt-4 text-sm text-coal/80">
            Here’s how Austin-area owners describe working with us. Swap these with your real Google
            and Nextdoor testimonials as you collect them.
          </p>
          <div className="mt-8 rounded-3xl border border-mist bg-white p-8 shadow-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg font-medium text-coal">
                  “{testimonials[active].quote}”
                </p>
                <div>
                  <p className="text-lg font-semibold text-midnight">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-slate">{testimonials[active].detail}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  className={`h-2 w-10 rounded-full transition ${
                    index === active ? "bg-accent" : "bg-mist"
                  }`}
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative rounded-[40px] border border-mist bg-white p-6">
            <img
              src="/assets/testimonial.png"
              alt="Happy Cleaner client"
              className="w-full rounded-[30px] object-cover"
            />
            <div className="absolute -bottom-4 left-1/2 w-48 -translate-x-1/2 rounded-full bg-accent2 px-6 py-3 text-center text-white shadow-card">
              <p className="text-sm font-semibold">Happy Customers</p>
              <p className="text-2xl font-bold text-white">4035+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
