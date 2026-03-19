import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Initiatives", href: "/#initiatives" },
  { label: "Legacy Rise Sports", href: "/legacy-rise-sports" },
  { label: "Foundation", href: "/foundation" },
  { label: "News", href: "/blog" },
  { label: "Partnership", href: "/partnership" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHashLink = (href: string) => href.startsWith("/#");
  const isActive = (href: string) => {
    if (isHashLink(href)) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-display font-bold text-background text-lg">S</span>
          </div>
          <span className="font-display font-bold tracking-tighter text-xl hidden sm:inline">
            SHARAF MAHAMA
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 text-sm font-medium text-muted-foreground">
          {navItems.map((item) =>
            isHashLink(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                className={`hover:text-foreground transition-colors duration-200 ${isActive(item.href) ? "text-foreground" : ""}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`hover:text-foreground transition-colors duration-200 ${isActive(item.href) ? "text-foreground" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <a href="/#contact" className="hidden lg:block btn-dark">
          Get in Touch
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navItems.map((item) =>
            isHashLink(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="/#contact" onClick={() => setMobileOpen(false)} className="btn-dark block text-center mt-4">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
