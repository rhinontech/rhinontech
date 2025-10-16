import { Mail, MapPin, Phone, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const data = {
  linkedinLink: "https://linkedin.com/company/mvpblocks",
  twitterLink: "https://twitter.com/mvpblocks",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    marketing: "/marketing",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  contact: {
    email: "hello@mvpblocks.com",
    phone: "+91 8637373116",
    address: "Kolkata, West Bengal, India",
  },
  company: {
    name: "Rhinon Tech",
    description:
      "Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.",
    logo: "/assets/rhinonlogo.png",
  },
};

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: data.linkedinLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
];

const aboutLinks = [
  { text: "Company History", href: data.about.history },
  { text: "Meet the Team", href: data.about.team },
  { text: "Employee Handbook", href: data.about.handbook },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Feature", href: "/feature" },
  { text: "Pricing", href: "/pricing" },
];

const policyLinks = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms & Conditions", href: "/terms-conditions" },
  { text: "Security", href: "/security" },
  { text: "Support", href: "/support" },
  { text: "Contact Sales", href: "/contact-sales" },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

//  backdrop-blur-lg

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <footer className="w-full bg-black/10"> 
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Logo & company description */}
            <div className="lg:col-span-1">
              <div className="text-primary flex justify-center gap-2 sm:justify-start">
                <img
                  src={data.company.logo || "/placeholder.svg"}
                  alt="logo"
                  className="h-[40px] w-auto"
                />
              </div>

              <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
                {data.company.description}
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-primary hover:text-primary/80 transition"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="size-6" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product, Legal & Support, Contact Us */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row sm:justify-end sm:gap-12">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Product</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {serviceLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a
                        className="text-secondary-foreground/70 transition hover:text-secondary-foreground"
                        href={href}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Legal & Support</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {policyLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="text-secondary-foreground/70 transition hover:text-secondary-foreground"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Contact Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                    <li key={text}>
                      <a
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                        href="#"
                      >
                        <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                        {isAddress ? (
                          <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                            {text}
                          </address>
                        ) : (
                          <span className="text-secondary-foreground/70 flex-1 transition">
                            {text}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm">
                <span className="block sm:inline">All rights reserved.</span>
              </p>

              <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
                &copy; 2025 {data.company.name}
              </p>
            </div>
          </div>
        </div>
      </footer>
        <img 
          src="/assets/footer.png" 
          alt="" 
          className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10"
        />
    </div>
  );
}