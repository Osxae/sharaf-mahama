import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div {...fadeIn} className="max-w-4xl">
      <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">About</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
        Driven by Purpose, <br className="hidden md:block" />
        <span className="text-muted-foreground">Guided by Vision.</span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12 mt-8">
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
        <h3 className="font-display text-xl font-semibold mb-4">Biography</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Sharaf Mahama is a Ghanaian entrepreneur, sports development advocate, and philanthropist committed to transforming lives through strategic investments in youth empowerment and community development. As the founder of Legacy Rise Sports and the Sharaf Mahama Foundation, he has positioned himself at the intersection of sports, business, and social impact—leveraging innovation to create sustainable opportunities for young people across Ghana.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          As the son of John Dramani Mahama, Sharaf has carved out his own path, building a reputation grounded in purpose, leadership, and service. Rather than relying on his background, he has focused on delivering measurable impact through initiatives that promote talent discovery, mentorship, and access to professional sports infrastructure.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Through Legacy Rise Sports, Sharaf works to identify and nurture emerging talent, connecting grassroots athletes to professional opportunities both locally and internationally. His organization also provides consultancy services aimed at strengthening sports systems, improving athlete management, and enhancing the overall sports ecosystem in Ghana.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          His philanthropic arm, the Sharaf Mahama Foundation, is dedicated to addressing critical social challenges, particularly among underserved communities. The foundation focuses on education, youth development, health outreach, and sports as a tool for social change. By organizing community programs, donations, and development projects, it has positively impacted thousands of lives across the country.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Sharaf's work reflects a broader vision—to use sports not just as entertainment, but as a vehicle for economic empowerment, discipline, and social transformation. His leadership style combines entrepreneurial thinking with a deep sense of responsibility to uplift communities and inspire the next generation of leaders.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a growing influence in both business and philanthropy, Sharaf Mahama continues to champion initiatives that bridge the gap between potential and opportunity, making him one of the emerging voices shaping the future of youth development in Ghana.
        </p>
      </motion.div>

      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
        <h3 className="font-display text-xl font-semibold mb-4">Vision & Values</h3>
        <div className="space-y-6">
          {[
            {
              title: "Empowerment",
              desc: "Creating pathways for young Ghanaians to realize their potential through sports and education.",
            },
            {
              title: "Sustainability",
              desc: "Building programs and infrastructure that create lasting impact beyond short-term interventions.",
            },
            {
              title: "Excellence",
              desc: "Upholding the highest standards in sports management and philanthropic practice.",
            },
            {
              title: "Community",
              desc: "Centering the voices and needs of local communities in every initiative.",
            },
          ].map((v, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-1 rounded-full bg-primary flex-shrink-0" />
              <div>
                <p className="font-display font-semibold mb-1">{v.title}</p>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
