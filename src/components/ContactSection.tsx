import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@sharafmahama.com" },
  { icon: Phone, label: "Phone", value: "+233 XX XXX XXXX" },
  { icon: MapPin, label: "Location", value: "Accra, Ghana" },
];

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/sharafmahama/" },
  { label: "X", url: "https://x.com/SharafMahama18" },
  { label: "Facebook", url: "https://web.facebook.com/sharaf.mahama/?_rdc=1&_rdr#" },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 my-12 max-w-7xl mx-auto">
      <motion.div
        {...fadeIn}
        className="surface-dark rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Let's build the{" "}
              <span className="text-primary">future</span> together.
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Open for collaborations in sports management, philanthropic ventures, and speaking engagements.
            </p>

            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-lg">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-muted-foreground/20 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input-field"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input-field"
            />
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="input-field resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-card text-card-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
