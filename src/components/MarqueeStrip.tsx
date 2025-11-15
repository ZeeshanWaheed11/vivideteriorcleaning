type MarqueeStripProps = {
  text: string;
};

const MarqueeStrip = ({ text }: MarqueeStripProps) => {
  return (
    <div className="overflow-hidden border-y border-mist bg-cloud">
      <div className="marquee-track flex gap-8 whitespace-nowrap py-4 text-sm font-semibold uppercase tracking-[0.4em] text-coal/70">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={`${text}-${index}`} className="flex items-center gap-4">
            {text}
            <span className="text-accent">-</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
