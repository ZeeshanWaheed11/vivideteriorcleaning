import { brandInfo, footerContent } from "../data/content";
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
          <img
            src="/assets/logo-vivid.png"
            alt={brandInfo.name}
            className="h-12 w-auto rounded-lg bg-accent/10 p-2"
          />
          <p className="text-sm text-coal/70">{footerContent.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
            Quick Links
          </p>
          <ul className="mt-4 space-y-3 text-sm text-coal/70">
            {footerContent.quickLinks.map((link) => (
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
            {footerContent.servicesList.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent2">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-coal/70">
              {footerContent.legalLinks.map((link) => (
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
              {footerContent.socials.map((link) => {
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
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-mist px-4 pt-6 text-center text-sm text-coal/60">
        {footerContent.serviceArea}
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-3 text-center text-xs text-coal/60">
        © {new Date().getFullYear()} {brandInfo.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
