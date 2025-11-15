import { motion } from "framer-motion";

type SectionHeaderProps = {
  subtitle: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
};

const SectionHeader = ({
  subtitle,
  title,
  description,
  align = "start",
  tone = "dark",
}: SectionHeaderProps) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-midnight" : "text-white";
  const descriptionColor = tone === "light" ? "text-slate" : "text-white/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
        {subtitle}
      </span>
      <h2 className={`text-3xl font-semibold sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && <p className={`max-w-3xl text-base ${descriptionColor}`}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
