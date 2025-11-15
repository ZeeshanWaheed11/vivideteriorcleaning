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
  date: string;
  title: string;
};

export const navLinks: NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "House Cleaning",
    description:
      "Companies seem to dislike the term 'turnaround consulting' because it represents failure. The truth is that turnaround consulting represents success at realizing the company is going in the wrong direction.",
    icon: "/assets/icons/icon-1.svg",
  },
  {
    title: "Window Cleaning",
    description:
      "USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today's demanding corporate clients.",
    icon: "/assets/icons/icon-2.svg",
  },
  {
    title: "Pest Control",
    description:
      "A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.",
    icon: "/assets/icons/icon-3.svg",
  },
  {
    title: "Floor Cleaning",
    description:
      "Condition of your home. We work in teams of 2-4 or more. A team leader or the owner. As a web crawler expert, we help organizations adjust to the expanding significance of online presence.",
    icon: "/assets/icons/icon-4.svg",
  },
];

export const features: Feature[] = [
  {
    title: "Service and guarantees",
    description:
      "We will provide you with the best possible care in an atmosphere of comfort and compassion.",
    icon: "/assets/icons/icon-1.svg",
  },
  {
    title: "Team of professionals",
    description:
      "We will eliminate the chance of multiple visits by delivering the premium quality service.",
    icon: "/assets/icons/icon-2.svg",
  },
  {
    title: "Highest level of service",
    description:
      "Our company provides a wide range of cleaning services, from home cleaning to office cleaning.",
    icon: "/assets/icons/icon-3.svg",
  },
];

export const stats: Stat[] = [
  { value: "4035", label: "Happy Customers & Counting" },
  { value: "4.8", suffix: "/5", label: "Average client rating" },
  { value: "120", suffix: "+", label: "Projects finished monthly" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cleaner provides a wide range of cleaning services, from home cleaning to office cleaning. They used advanced technologies to keep our room looking the best. Their team of experts focuses on helping us achieve optimal clean surfaces.",
    name: "Jack Morrison",
    detail: "36 y, New York",
  },
  {
    quote:
      "Cleaner provides a wide range of cleaning services, from home cleaning to office cleaning. They used advanced technologies to keep our room looking the best.",
    name: "Laura Gibson",
    detail: "31 y, Chicago",
  },
  {
    quote:
      "Their team of experts who have been in the profession for years focuses on helping you achieve optimal clean surface every single visit.",
    name: "Oliver Stone",
    detail: "29 y, Miami",
  },
];

export const blogPosts: BlogPost[] = [
  {
    image: "/assets/services.png",
    category: "Apartment",
    date: "Mar 15, 2022",
    title: "How to clean wooden floors without creating dust.",
  },
  {
    image: "/assets/features.png",
    category: "Office",
    date: "Feb 28, 2022",
    title: "The secret of cleaning your wooden furnitures.",
  },
  {
    image: "/assets/stats.png",
    category: "Cleaning",
    date: "Feb 6, 2022",
    title: "6 easy ideas to clean office sofa without water.",
  },
];

export const galleryImages = [
  "/assets/hero.png",
  "/assets/services.png",
  "/assets/features.png",
  "/assets/about-people.png",
];

export const heroDetails = {
  title: "Professional Cleaning Services in Auburn.",
  subTitle: "AWARD WINNING CLEANING SERVICE COMPANY",
  description:
    "Our company provides a wide range of cleaning services, from home cleaning to office cleaning. We use only advanced technologies to keep your room looking the best.",
  buttonLabel: "Make An Appointment",
  secondaryLabel: "Call us: +1-394-495-5993",
};

export const workingHours = [
  { label: "MON-FRI", value: "9 AM - 22 PM" },
  { label: "SATURDAY", value: "9 AM - 20 PM" },
];

export const contactInfo = {
  title: "Discuss our services or make an appointment",
  body:
    "We know what a sore tooth is, so do not hesitate to reach us via the phone or to make an appointment online! We know what a sore.",
  phone: "+1 071 281 9795",
  email: "hello@vividexteriorcleaning.co",
};

export const footerLinks = {
  company: [
    { label: "Home", href: "#hero" },
    { label: "Articles", href: "#blog" },
    { label: "Contacts", href: "#contact" },
  ],
  services: [
    { label: "Home Cleaning", href: "#services" },
    { label: "Window Cleaning", href: "#services" },
    { label: "Pest Control", href: "#services" },
    { label: "Floor Cleaning", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy.html" },
    { label: "Terms of Service", href: "/terms.html" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Linkedin", href: "https://www.linkedin.com" },
    { label: "Twitter", href: "https://www.twitter.com" },
  ],
};

export const badges = [
  { label: "4.7 out of 5", description: "HIGHEST LEVEL OF SERVICE" },
  { label: "4.8 out of 5", description: "Your comfort is our main priority" },
];
