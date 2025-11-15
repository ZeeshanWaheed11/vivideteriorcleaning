import { motion } from "framer-motion";
import { PiPhoneCallBold } from "react-icons/pi";
import { topBarCopy } from "../data/content";

const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-accent text-white text-xs sm:text-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-center font-medium sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span>{topBarCopy.message}</span>
        <a
          href={`tel:${topBarCopy.phone.replace(/[^\d]/g, "")}`}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-white sm:justify-start"
          aria-label="Call VIVID Exterior Cleaning"
        >
          <span className="rounded-full bg-white/30 p-2">
            <PiPhoneCallBold className="text-base text-white" />
          </span>
          {topBarCopy.phone}
        </a>
      </div>
    </motion.div>
  );
};

export default TopBar;
