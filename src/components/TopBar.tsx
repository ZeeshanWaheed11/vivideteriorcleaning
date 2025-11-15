import { motion } from "framer-motion";
import { PiPhoneCallBold } from "react-icons/pi";

const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-accent text-midnight text-xs sm:text-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 font-medium sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-[0.2em] text-midnight/70">
            Need quick cleaning help?
          </span>
        </div>
        <a
          href="tel:+10712819795"
          className="flex items-center justify-center gap-2 text-sm font-semibold"
          aria-label="Call Cleaner support"
        >
          <span className="rounded-full bg-white/40 p-2">
            <PiPhoneCallBold className="text-base text-midnight" />
          </span>
          Call Us: +1 071 281 9795
        </a>
      </div>
    </motion.div>
  );
};

export default TopBar;
