import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Heart, Users, Zap, Building2, DollarSign, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const Partnership = () => {
  const partnershipOpportunities = [
    {
      icon: Heart,
      title: "Corporate Partnerships",
      description: "Collaborate with us to create lasting social impact through strategic corporate partnerships and sponsorships.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our communities in driving grassroots initiatives that empower youth and foster sustainable development.",
    },
    {
      icon: Zap,
      title: "Initiative Sponsorship",
      description: "Support specific projects and events that align with your organization's values and mission.",
    },
    {
      icon: Building2,
      title: "Institutional Partners",
      description: "Work with educational and governmental institutions to scale our impact and reach more beneficiaries.",
    },
  ];

  const supportOptions = [
    {
      icon: DollarSign,
      title: "Financial Contributions",
      description: "Make monetary donations to support our programs and initiatives.",
      link: "/#contact",
    },
    {
      icon: Banknote,
      title: "Recurring Donations",
      description: "Become a monthly supporter and help us sustain long-term programs.",
      link: "/#contact",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Give your time and expertise to directly impact beneficiaries.",
      link: "/#contact",
    },
    {
      icon: Building2,
      title: "In-Kind Donations",
      description: "Donate goods, services, or resources to support our initiatives.",
      link: "/#contact",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-container pb-24">
          <motion.div {...fadeIn} className="max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              ← Back to Home
            </Link>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Partnerships & <span className="text-muted-foreground">Support</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Join us in creating meaningful impact across sports development, education, and community empowerment. Together, we can build a brighter future for Ghana's youth.
            </p>
          </motion.div>
        </section>

        {/* Partnership Opportunities */}
        <section className="section-container bg-accent/50 py-24">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Partnership <span className="text-muted-foreground">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore the various ways your organization can partner with us to drive sustainable change.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {partnershipOpportunities.map((opp, i) => {
              const Icon = opp.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="card-elevated p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{opp.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Support Options */}
        <section className="section-container py-24">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ways to <span className="text-muted-foreground">Support Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Whether you can contribute financially, volunteer your time, or provide resources, every form of support makes a difference.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={i}
                  href={option.link}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="card-elevated p-6 hover:bg-accent/50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </section>

        {/* Contact Information */}
        <section className="section-container bg-accent/50 py-24">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-muted-foreground">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Interested in a partnership or have questions about support opportunities? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={itemVariants} className="card-elevated p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:partnerships@sharafmahama.com" className="text-muted-foreground hover:text-foreground transition-colors">
                partnerships@sharafmahama.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="card-elevated p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+233123456789" className="text-muted-foreground hover:text-foreground transition-colors">
                +233 (0) 123 456 789
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="card-elevated p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Accra, Ghana
              </p>
            </motion.div>
          </motion.div>

          <motion.div {...fadeIn} className="text-center">
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={20} />
            </a>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="section-container py-24">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Make <span className="text-muted-foreground">an Impact?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're an organization, individual, or community member, there's a meaningful way for you to contribute to our mission. Let's work together to empower Ghana's youth and drive sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-primary">
                Get in Touch
              </a>
              <Link to="/" className="px-8 py-4 rounded-xl font-semibold border border-border hover:bg-accent transition-colors inline-flex items-center gap-2 justify-center">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partnership;
