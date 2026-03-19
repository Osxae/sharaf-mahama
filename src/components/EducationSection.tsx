import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Ghana",
    degree: "Bachelor of Arts in Political Science",
    period: "2014 – 2018",
    details: "Focused on governance, public policy, and international relations with distinction.",
  },
  {
    institution: "GIMPA",
    degree: "Executive Certificate in Leadership",
    period: "2019",
    details: "Ghana Institute of Management and Public Administration — advanced leadership and strategic management.",
  },
  {
    institution: "Sports Management Institute",
    degree: "Certificate in Sports Business Management",
    period: "2020",
    details: "Specialized training in sports consultancy, athlete management, and event organization.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const EducationSection = () => (
  <section id="education" className="section-container bg-accent/50">
    <motion.div {...fadeIn}>
      <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Education</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
        Academic <span className="text-muted-foreground">Foundation</span>
      </h2>
    </motion.div>

    <div className="space-y-6">
      {education.map((edu, i) => (
        <motion.div
          key={i}
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: i * 0.1 }}
          className="card-elevated p-8 flex flex-col md:flex-row gap-6"
        >
          <div className="p-3 rounded-lg bg-accent self-start">
            <GraduationCap size={24} className="text-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-display text-xl font-semibold">{edu.institution}</h3>
              <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
            </div>
            <p className="font-medium text-primary mb-2">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.details}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
