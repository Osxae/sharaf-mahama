import { motion } from "framer-motion";
import h41 from "@/assets/h (41).jpg";
import h8 from "@/assets/h (8).jpg";
import f65 from "@/assets/f (65).jpg";
import f4 from "@/assets/f (4).jpg";
import f64 from "@/assets/f (64).jpg";
import f48 from "@/assets/f (48).jpg";

const images = [
  { src: h41, alt: "Legacy Rise Sports Moment", label: "Sports Legacy" },
  { src: h8, alt: "Sports Development", label: "Sports Development" },
  { src: f65, alt: "Foundation Impact", label: "Community Outreach" },
  { src: f4, alt: "Youth Development", label: "Youth Empowerment" },
  { src: f64, alt: "Social Impact", label: "Social Impact" },
  { src: f48, alt: "Community Development", label: "Community Development" },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const GallerySection = () => (
  <section id="gallery" className="section-container">
    <motion.div {...fadeIn}>
      <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Gallery</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
        Impact in <span className="text-muted-foreground">Action</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <motion.div
          key={i}
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: i * 0.1 }}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-primary-foreground font-display font-semibold text-lg">{img.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default GallerySection;
