import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/s10.jpeg";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const HeroSection = () => (
  <section className="section-container pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
      <motion.div {...fadeIn} className="lg:col-span-1">
        <div className="tag-green mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          EMPOWERING THE NEXT GENERATION
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-balance">
          Entrepreneur. <br />
          <span className="text-muted-foreground">Philanthropist.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
          Leading the intersection of sports development and social impact across Ghana.
        </p>

        <div className="flex gap-6 items-center">
          <a href="#about" className="btn-primary text-sm px-6 py-2.5">
            Learn More <ArrowUpRight size={16} />
          </a>
          <a
            href="#initiatives"
            className="px-6 py-2.5 rounded-xl font-semibold text-sm border border-border hover:bg-accent transition-colors inline-flex items-center gap-2"
          >
            View Initiatives
          </a>
        </div>
      </motion.div>

      <div className="hidden lg:block"></div> {/* Empty spacer column */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl max-w-sm lg:col-start-3"
      >
        <img
          src={heroImage}
          alt="Sharaf Mahama - Entrepreneur and Philanthropist"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        <div className="absolute bottom-8 left-8 text-primary-foreground">
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Founder</p>
          <p className="text-2xl font-display font-bold">Legacy Rise Sports</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
