import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/sharafmahama/" },
  { label: "X", url: "https://x.com/SharafMahama18" },
  { label: "Facebook", url: "https://web.facebook.com/sharaf.mahama/?_rdc=1&_rdr#" },
];

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-display font-bold tracking-tighter text-lg mb-4">SHARAF MAHAMA</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Entrepreneur, sports promoter, and philanthropist empowering communities across Ghana.
          </p>
        </div>
        <div>
          <p className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {[
              { label: "About", href: "/#about" },
              { label: "Legacy Rise Sports", href: "/legacy-rise-sports" },
              { label: "Foundation", href: "/foundation" },
              { label: "News & Updates", href: "/blog" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Connect</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="/#contact" className="hover:text-foreground transition-colors">Contact Us</a>
            <p>contact@sharafmahama.com</p>
            <p>Accra, Ghana</p>
          </div>
          <div className="flex gap-3 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sharaf Mahama. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
