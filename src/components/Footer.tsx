import { footerLinks } from "../data/content";
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";

const socialIcons = {
  Facebook: PiFacebookLogoBold,
  Instagram: PiInstagramLogoBold,
  Linkedin: PiLinkedinLogoBold,
  Twitter: PiTwitterLogoBold,
};

const Footer = () => {
  return (
    <footer className="bg-white pb-10 pt-16 text-midnight">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-midnight">Vivid Exterior Cleaning</p>
          <p className="text-sm text-coal/70">
            Vivid Exterior Cleaning restores Auburn homes and businesses with top-tier exterior care.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
            Company
          </p>
          <ul className="mt-4 space-y-3 text-sm text-coal/70">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-accent2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
            Services
          </p>
          <ul className="mt-4 space-y-3 text-sm text-coal/70">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-accent2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
            Legal
          </p>
          <ul className="mt-4 space-y-3 text-sm text-coal/70">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-accent2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
            Social
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {footerLinks.social.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist text-coal/70 transition hover:border-accent hover:text-midnight"
                >
                  {Icon ? <Icon /> : link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-mist px-4 pt-6 text-center text-sm text-coal/60">
        © {new Date().getFullYear()} Vivid Exterior Cleaning · vividexteriorcleaning.co · All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
