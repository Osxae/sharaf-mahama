import { motion } from "framer-motion";
import { Target, Users, Award, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import sportsImg from "@/assets/sports-facility.jpg";

const initiatives = [
  {
    icon: Target,
    category: "Sports",
    title: "Legacy Rise Sports",
    description:
      "A premier sports consultancy focusing on talent identification, professional pathway development, and infrastructure building for Ghanaian athletes.",
    link: "/legacy-rise-sports",
  },
  {
    icon: Heart,
    category: "Philanthropy",
    title: "Sharaf Mahama Foundation",
    description:
      "Dedicated to improving healthcare access, educational infrastructure, and community welfare in underserved regions of Ghana.",
    link: "/foundation",
  },
  {
    icon: Users,
    category: "Community",
    title: "Youth Empowerment Programs",
    description:
      "Mentorship programs connecting industry leaders with aspiring entrepreneurs and athletes to build the next generation of Ghanaian leaders.",
  },
  {
    icon: Award,
    category: "Development",
    title: "Sports Infrastructure",
    description:
      "Investing in world-class sports facilities and training grounds to nurture talent and bring professional sports standards to local communities.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const InitiativesSection = () => (
  <section id="initiatives" className="section-container">
    <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Initiatives & Projects
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Core Initiatives</h2>
        <p className="text-muted-foreground">
          Strategic interventions designed to create sustainable growth in sports and community welfare.
        </p>
      </div>
      <div className="h-px flex-grow bg-border mx-8 hidden md:block mb-4" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {initiatives.map((item, i) => (
        <motion.div
          key={i}
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="group card-elevated p-8 relative"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-lg bg-accent text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <item.icon size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              {item.category}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">{item.description}</p>
          {item.link && (
            <Link
              to={item.link}
              className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Learn More <ArrowUpRight size={14} />
            </Link>
          )}
        </motion.div>
      ))}
    </div>

    <motion.div
      {...fadeIn}
      className="relative rounded-3xl overflow-hidden h-64 md:h-80"
    >
      <img
        src={sportsImg}
        alt="Sports development facility"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
        <div className="px-8 md:px-12 max-w-lg">
          <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold mb-2">
            Building World-Class Infrastructure
          </p>
          <p className="text-primary-foreground/70 text-sm">
            Investing in modern sports facilities across Ghana to nurture the next generation of athletic talent.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default InitiativesSection;
