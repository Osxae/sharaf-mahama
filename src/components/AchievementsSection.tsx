import { motion } from "framer-motion";

const timeline = [
  { year: "2018", title: "Founded Legacy Rise Sports", desc: "Established Ghana's premier sports consultancy firm." },
  { year: "2019", title: "Launched Sharaf Mahama Foundation", desc: "Initiated philanthropic operations across Northern Ghana." },
  { year: "2020", title: "Youth Sports Academy Opened", desc: "First dedicated training facility serving 200+ athletes annually." },
  { year: "2021", title: "Community Health Initiative", desc: "Partnered with health organizations to deliver free medical outreach to 5,000+ people." },
  { year: "2022", title: "National Sports Award", desc: "Recognized for outstanding contributions to sports development in Ghana." },
  { year: "2023", title: "International Partnership", desc: "Secured partnerships with global sports organizations for talent exchange programs." },
  { year: "2024", title: "Expanded Foundation Reach", desc: "Extended Foundation operations to 24 communities with 12 active projects." },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const AchievementsSection = () => (
  <section id="achievements" className="section-container bg-accent/50">
    <motion.div {...fadeIn}>
      <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
        Achievements & Recognition
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
        Milestones <span className="text-muted-foreground">& Impact</span>
      </h2>
    </motion.div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12">
        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.08 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                <div className="card-elevated p-6 inline-block max-w-md">
                  <p className="text-sm font-bold text-primary mb-1">{item.year}</p>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-2 md:mt-0" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
