export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type BlogPost = {
  image: string;
  category: string;
  date?: string;
  title: string;
  excerpt: string;
};

export const brandInfo = {
  name: "VIVID Exterior Cleaning",
  tagline: "Certified Hood & Exterior Cleaning Experts – Austin, TX",
  domain: "vividexteriorcleaning.co",
};

export const topBarCopy = {
  message:
    "Need urgent hood or exterior cleaning? Call or text (512) 897-6963 for a fast quote – available 7 days a week, 24/7 for emergencies.",
  phone: "(512) 897-6963",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "MFS-CERTIFIED • NFPA-96 COMPLIANT • FULLY INSURED",
  headline: "NFPA-96 Hood Vent Cleaning for Austin’s Kitchens",
  subHeadline:
    "Deep, code-compliant hood and exhaust cleaning from cooktop to rooftop fan, so you pass fire inspections, protect your staff, and keep the line moving.",
  primaryCta: "Schedule a Hood Cleaning",
  phone: "(512) 897-6963",
  secondaryLine: "Or call (512) 897-6963 to talk directly with Jimmy or Ryan.",
  trustBullets: [
    "MFS-certified hood cleaning specialists",
    "NFPA-96 compliant from hood to rooftop fan",
    "Fully insured & locally owned in Austin, TX",
    "Photo documentation for your records and fire inspector",
  ],
};

export const badges = [
  {
    label: "Trusted by Local Kitchens",
    description:
      "From Austin to Round Rock, Hutto, Cedar Park, Buda and Bastrop, commercial kitchens rely on VIVID to keep their hoods clean, safe, and inspection-ready.",
  },
  {
    label: "Exterior Cleaning Pros",
    description:
      "Beyond the kitchen, we handle house washing, roof cleaning, construction clean-ups, window cleaning, and holiday & permanent lighting for homes and businesses.",
  },
];

export const servicesIntro = {
  eyebrow: "HIGHEST LEVEL OF SERVICE",
  title: "We provide our best cleaning services for your kitchen & property",
  intro:
    "VIVID started in exterior cleaning and grew into full commercial hood and exhaust cleaning after seeing how much risk grease-packed systems create for local kitchens. Today, we combine safety-first hood cleaning with premium exterior services, so your building looks sharp and your kitchen stays compliant.",
};

export const services: Service[] = [
  {
    title: "Commercial Hood & Exhaust Cleaning",
    description:
      "We thoroughly clean your hood, plenum, filters, ductwork, and exhaust fan using hot water, degreasers, and specialized tools. Our goal is simple: remove grease build-up to bare metal so your system runs safer, cooler, and more efficiently.",
    icon: "/assets/icons/icon-1.svg",
  },
  {
    title: "Full Hood-to-Rooftop Cleaning",
    description:
      "Grease doesn’t stop at the hood. We clean from kitchen hood all the way through the rooftop fan, including the fan housing and accessible duct runs, so there are no ‘forgotten’ sections that fail inspection or become a fire hazard.",
    icon: "/assets/icons/icon-2.svg",
  },
  {
    title: "NFPA-96 Compliance & Fire Inspection Prep",
    description:
      "We follow NFPA-96 standards and local fire code best practices, then provide before-and-after photos and a clear service report you can show your fire marshal, insurance provider, or landlord. Need to get ready before an inspection? We’ve got you covered.",
    icon: "/assets/icons/icon-3.svg",
  },
  {
    title: "Preventive Programs & Emergency Cleanings",
    description:
      "Set up a recurring cleaning schedule so you never have to chase due dates again. And when a surprise inspection or heavy season leaves your system in rough shape, call us for after-hours and 24/7 emergency hood cleaning.",
    icon: "/assets/icons/icon-4.svg",
  },
];

export const secondaryServicesLine =
  "House washing • Roof cleaning • Construction clean-up • Window cleaning • Holiday & permanent lighting installs. One trusted team for your whole property.";

export const galleryImages = [
  "/assets/hero.png",
  "/assets/services.png",
  "/assets/features.png",
  "/assets/about-people.png",
];

export const aboutContent = {
  marquee: "VIVID EXTERIOR CLEANING • HOOD & EXTERIOR EXPERTS • CENTRAL TEXAS •",
  eyebrow: "WHO WE ARE",
  title: "Your local hood & exterior cleaning team, built on experience and trust",
  description:
    "VIVID Exterior Cleaning is owned and operated by Jimmy & Ryan, two exterior cleaning pros with over 20 years of combined experience in house washing, window cleaning, construction clean-up, lighting, and now specialized commercial hood vent cleaning. We met in the field, built our reputation on showing up, doing it right, and treating every property like our own – and we carry that same mindset into every kitchen we clean.",
  secondary:
    "We invested in professional hood cleaning training and MFS certification so Austin-area restaurants could have a local partner who understands NFPA-96, grease fire risk, and real-world kitchen operations – not just surface-level cleaning. Today, VIVID is known for being responsive, detail-driven, and easy to work with.",
  quickFacts: [
    "20+ years combined experience in exterior & hood cleaning",
    "Certified and fully insured for commercial kitchen exhaust cleaning",
    "Serving Austin, Round Rock, Hutto, Cedar Park, Buda, Bastrop and surrounding areas",
    "After-hours and 24/7 emergency service available",
  ],
};

export const featuresIntro = {
  eyebrow: "WHAT WE DO",
  title: "We don’t just clean – we protect your kitchen and your business",
  description:
    "A greasy hood isn’t just a cleanliness issue – it’s a fire, insurance, and downtime problem waiting to happen. Our process goes beyond a quick wipe-down, focusing on safety, documentation, and long-term reliability.",
};

export const features: Feature[] = [
  {
    title: "Deep Cleaning to Bare Metal",
    description:
      "We use commercial-grade degreasers, hot water, and specialized tools to break down grease build-up and clean your hood and ductwork back to bare metal wherever accessible, helping you meet NFPA-96 guidelines and lower fire risk.",
    icon: "/assets/icons/icon-1.svg",
  },
  {
    title: "Code-Ready Documentation",
    description:
      "After each service, we provide before-and-after photos and a written summary of what we cleaned, so you have clear proof of maintenance for fire marshals, landlords, and insurers.",
    icon: "/assets/icons/icon-2.svg",
  },
  {
    title: "Scheduled Around Your Hours",
    description:
      "We work when you don’t – overnight, early mornings, or off-days – to keep your kitchen open and your staff focused on service. Emergency situation? We offer 24/7 response when you need us most.",
    icon: "/assets/icons/icon-3.svg",
  },
  {
    title: "One Team for Hood & Exterior",
    description:
      "Combine hood cleaning with pressure washing, window cleaning, and lighting installs to keep both your kitchen and your curb appeal in top shape – with one trusted vendor and one call to make.",
    icon: "/assets/icons/icon-4.svg",
  },
];

export const stats: Stat[] = [
  { value: "20", suffix: "+", label: "Years of combined experience" },
  { value: "7", label: "Days a week we’re available for scheduling" },
  { value: "100", suffix: "%", label: "Focus on safety, compliance & long-term relationships" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "VIVID took our hood from greasy and overdue to spotless in one night. They handled everything from rooftop fan to filters and sent detailed photos for our records. The fire inspector was impressed, and we didn’t lose a single service.",
    name: "Restaurant Owner",
    detail: "Austin, TX",
  },
  {
    quote:
      "Scheduling was simple, they showed up on time, and worked after close so my staff wasn’t disrupted. The difference in our exhaust system and the peace of mind for fire safety is huge.",
    name: "General Manager",
    detail: "Round Rock, TX",
  },
  {
    quote:
      "We use VIVID for both hood cleaning and exterior work – windows, house wash, even lighting. It’s nice having one reliable crew who knows our property and always does what they say they’ll do.",
    name: "Multi-Location Operator",
    detail: "Greater Austin Area",
  },
];

export const blogPosts: BlogPost[] = [
  {
    image: "/assets/services.png",
    category: "Kitchen Safety",
    title: "How Often Should You Clean Your Restaurant Hood Vent?",
    excerpt:
      "Learn how NFPA-96 guidelines, cooking volume, and menu type affect your cleaning schedule – and why ‘once a year’ is almost never enough for busy kitchens.",
  },
  {
    image: "/assets/features.png",
    category: "Compliance",
    title: "Passing Your Next Hood & Exhaust Fire Inspection",
    excerpt:
      "From access panels to documentation, here’s what inspectors look for, and how professional hood cleaning keeps you ahead of surprise visits.",
  },
  {
    image: "/assets/stats.png",
    category: "Exterior Cleaning",
    title: "Why Curb Appeal Matters for Restaurants as Much as the Kitchen",
    excerpt:
      "Clean windows, bright lighting, and a fresh exterior set the tone before guests taste a single bite. Pair hood cleaning with exterior services to boost your brand.",
  },
];

export const contactContent = {
  eyebrow: "CONTACT US",
  title: "Let’s schedule your next hood or exterior cleaning",
  body:
    "Share a few details about your kitchen or property, and we’ll send back a clear quote and recommended cleaning schedule. Whether you’re overdue, preparing for an inspection, or setting up a maintenance plan, we’ll make it straightforward and stress-free.",
  bullets: [
    "NFPA-96 compliant hood & exhaust cleaning",
    "Photo and report after every service",
    "After-hours & 24/7 emergency availability",
    "Serving Austin, Round Rock, Hutto, Cedar Park, Buda, Bastrop & nearby areas",
  ],
  phones: [
    { label: "Call / Text Jimmy", value: "(512) 897-6963" },
    { label: "Call / Text Ryan", value: "(512) 644-7613" },
  ],
  email: "vividcleaning512@gmail.com",
  serviceHours: "Standard appointments: Mon–Sat · After-hours & emergency hood cleaning: 24/7 by request",
};

export const footerContent = {
  tagline:
    "Expert hood vent, exhaust, and exterior cleaning for Austin-area homes and businesses.",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  servicesList: [
    "Commercial hood & exhaust cleaning",
    "NFPA-96 compliant system cleaning",
    "House & roof washing",
    "Window cleaning",
    "Construction clean-up",
    "Holiday & permanent lighting installs",
  ],
  serviceArea:
    "Proudly serving Austin, Round Rock, Hutto, Cedar Park, Buda, Bastrop and the surrounding Central Texas area.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy.html" },
    { label: "Terms of Service", href: "/terms.html" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Linkedin", href: "https://www.linkedin.com" },
    { label: "Twitter", href: "https://www.twitter.com" },
  ],
};
