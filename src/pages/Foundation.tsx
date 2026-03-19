import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Heart, Users, Droplets, GraduationCap, Activity, Sprout, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import media images
import f1 from "@/assets/f (1).jpg";
import f2 from "@/assets/f (2).jpg";
import f3 from "@/assets/f (3).jpg";
import f4 from "@/assets/f (4).jpg";
import f5 from "@/assets/f (5).jpg";
import f6 from "@/assets/f (6).jpg";
import f7 from "@/assets/f (7).jpg";
import f8 from "@/assets/f (8).jpg";
import f9 from "@/assets/f (9).jpg";
import f10 from "@/assets/f (10).jpg";
import f11 from "@/assets/f (11).jpg";
import f12 from "@/assets/f (12).jpg";
import f13 from "@/assets/f (13).jpg";
import f14 from "@/assets/f (14).jpg";
import f15 from "@/assets/f (15).jpg";
import f16 from "@/assets/f (16).jpg";
import f17 from "@/assets/f (17).jpg";
import f18 from "@/assets/f (18).jpg";
import f19 from "@/assets/f (19).jpg";
import f20 from "@/assets/f (20).jpg";
import f21 from "@/assets/f (21).jpg";
import f22 from "@/assets/f (22).jpg";
import f23 from "@/assets/f (23).jpg";
import f24 from "@/assets/f (24).jpg";
import f25 from "@/assets/f (25).jpg";
import f26 from "@/assets/f (26).jpg";
import f27 from "@/assets/f (27).jpg";
import f28 from "@/assets/f (28).jpg";
import f29 from "@/assets/f (29).jpg";
import f30 from "@/assets/f (30).jpg";
import f31 from "@/assets/f (31).jpg";
import f32 from "@/assets/f (32).jpg";
import f33 from "@/assets/f (33).jpg";
import f34 from "@/assets/f (34).jpg";
import f35 from "@/assets/f (35).jpg";
import f36 from "@/assets/f (36).jpg";
import f37 from "@/assets/f (37).jpg";
import f38 from "@/assets/f (38).jpg";
import f39 from "@/assets/f (39).jpg";
import f40 from "@/assets/f (40).jpg";
import f41 from "@/assets/f (41).jpg";
import f42 from "@/assets/f (42).jpg";
import f43 from "@/assets/f (43).jpg";
import f44 from "@/assets/f (44).jpg";
import f45 from "@/assets/f (45).jpg";
import f46 from "@/assets/f (46).jpg";
import f47 from "@/assets/f (47).jpg";
import f48 from "@/assets/f (48).jpg";
import f49 from "@/assets/f (49).jpg";
import f50 from "@/assets/f (50).jpg";
import f51 from "@/assets/f (51).jpg";
import f52 from "@/assets/f (52).jpg";
import f53 from "@/assets/f (53).jpg";
import f54 from "@/assets/f (54).jpg";
import f55 from "@/assets/f (55).jpg";
import f56 from "@/assets/f (56).jpg";
import f57 from "@/assets/f (57).jpg";
import f58 from "@/assets/f (58).jpg";
import f59 from "@/assets/f (59).jpg";
import f60 from "@/assets/f (60).jpg";
import f61 from "@/assets/f (61).jpg";
import f62 from "@/assets/f (62).jpg";
import f63 from "@/assets/f (63).jpg";
import f64 from "@/assets/f (64).jpg";
import f65 from "@/assets/f (65).jpg";
import f66 from "@/assets/f (66).jpg";
import f67 from "@/assets/f (67).jpg";
import f68 from "@/assets/f (68).jpg";
import f69 from "@/assets/f (69).jpg";
import f70 from "@/assets/f (70).jpg";
import f71 from "@/assets/f (71).jpg";
import f72 from "@/assets/f (72).jpg";
import f73 from "@/assets/f (73).jpg";
import f74 from "@/assets/f (74).jpg";
import f75 from "@/assets/f (75).jpg";
import f76 from "@/assets/f (76).jpg";
import f77 from "@/assets/f (77).jpg";
import f78 from "@/assets/f (78).jpg";
import f79 from "@/assets/f (79).jpg";
import f80 from "@/assets/f (80).jpg";
import f81 from "@/assets/f (81).jpg";
import f82 from "@/assets/f (82).jpg";
import f83 from "@/assets/f (83).jpg";
import f84 from "@/assets/f (84).jpg";
import f85 from "@/assets/f (85).jpg";
import f86 from "@/assets/f (86).jpg";
import f87 from "@/assets/f (87).jpg";
import f88 from "@/assets/f (88).jpg";
import f89 from "@/assets/f (89).jpg";
import f90 from "@/assets/f (90).jpg";
import f91 from "@/assets/f (91).jpg";
import f92 from "@/assets/f (92).jpg";
import f93 from "@/assets/f (93).jpg";
import f94 from "@/assets/f (94).jpg";
import f95 from "@/assets/f (95).jpg";
import f96 from "@/assets/f (96).jpg";
import f97 from "@/assets/f (97).jpg";
import f98 from "@/assets/f (98).jpg";
import f99 from "@/assets/f (99).jpg";
import f100 from "@/assets/f (100).jpg";
import f101 from "@/assets/f (101).jpg";
import f102 from "@/assets/f (102).jpg";
import f103 from "@/assets/f (103).jpg";
import f104 from "@/assets/f (104).jpg";
import f105 from "@/assets/f (105).jpg";
import f106 from "@/assets/f (106).jpg";
import f107 from "@/assets/f (107).jpg";

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
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

const categoryIcons: Record<string, typeof Heart> = {
  water: Droplets,
  education: GraduationCap,
  health: Activity,
  community: Users,
  sports: Activity,
  livelihood: Sprout,
};

const statusColors: Record<string, string> = {
  ongoing: "bg-secondary/10 text-secondary",
  planned: "bg-primary/10 text-primary",
  completed: "bg-muted text-muted-foreground",
};

const Foundation = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const mediaImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, f25, f26, f27, f28, f29, f30, f31, f32, f33, f34, f35, f36, f37, f38, f39, f40, f41, f42, f43, f44, f45, f46, f47, f48, f49, f50, f51, f52, f53, f54, f55, f56, f57, f58, f59, f60, f61, f62, f63, f64, f65, f66, f67, f68, f69, f70, f71, f72, f73, f74, f75, f76, f77, f78, f79, f80, f81, f82, f83, f84, f85, f86, f87, f88, f89, f90, f91, f92, f93, f94, f95, f96, f97, f98, f99, f100, f101, f102, f103, f104, f105, f106, f107];

  const handleDownloadImage = async () => {
    if (selectedImageIndex === null) return;
    try {
      const imageUrl = mediaImages[selectedImageIndex];
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `foundation-moment-${selectedImageIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download image");
      console.error("Download error:", error);
    }
  };

  const { data: projects } = useQuery({
    queryKey: ["foundation-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("foundation_projects")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const ongoing = projects?.filter((p) => p.status === "ongoing") ?? [];
  const planned = projects?.filter((p) => p.status === "planned") ?? [];
  const completed = projects?.filter((p) => p.status === "completed") ?? [];

  const totalBeneficiaries = projects?.reduce((sum, p) => sum + (p.beneficiaries ?? 0), 0) ?? 0;

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section-container pb-12">
          <motion.div {...fadeIn}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Heart size={28} className="text-secondary" />
              </div>
              <div>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                  Sharaf Mahama <span className="text-secondary">Foundation</span>
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...slideInLeft}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sharaf Mahama Foundation is a humanitarian organization dedicated to transforming lives and uplifting underserved communities across Ghana through sustainable and impactful interventions. With a strong focus on healthcare, education, clean water access, and community development, the foundation is committed to addressing some of the most pressing social challenges facing vulnerable populations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Sharaf Mahama, the foundation operates with a people-centered approach—designing programs that respond directly to the needs of communities while promoting long-term self-reliance. Its initiatives range from medical outreach programs and educational support to the provision of boreholes and essential infrastructure in deprived areas.
              </p>
            </motion.div>

            <motion.div {...slideInRight}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At its core, the Sharaf Mahama Foundation prioritizes sustainability and measurable impact. Rather than short-term aid, it invests in solutions that create lasting change—empowering individuals, strengthening communities, and improving quality of life for future generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through strategic partnerships, volunteer engagement, and community-driven projects, the foundation continues to expand its reach, making a meaningful difference in the lives of thousands across Ghana while inspiring hope, resilience, and opportunity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact stats */}
        <div className="surface-dark py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: totalBeneficiaries.toLocaleString() + "+", label: "Lives Impacted" },
              { num: String(projects?.length ?? 0), label: "Projects" },
              { num: String(ongoing.length), label: "Ongoing" },
              { num: String(planned.length), label: "Planned" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ ...fadeIn.transition, delay: i * 0.1 }}>
                <p className="stat-value text-3xl">{s.num}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <section className="section-container">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Active</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ongoing <span className="text-muted-foreground">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ongoing.map((project, i) => {
              const Icon = categoryIcons[project.category] ?? Heart;
              return (
                <motion.div
                  key={project.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="card-elevated p-8"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Icon size={24} className="text-secondary" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  {project.impact_summary && (
                    <div className="p-4 rounded-xl bg-accent/50 mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
                      <p className="text-sm text-foreground">{project.impact_summary}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    {project.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                      </span>
                    )}
                    {project.beneficiaries !== null && project.beneficiaries > 0 && (
                      <span className="flex items-center gap-1">
                        <Users size={12} /> {project.beneficiaries.toLocaleString()} beneficiaries
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Planned Projects */}
        {planned.length > 0 && (
          <section className="section-container bg-accent/50">
            <motion.div {...fadeIn} className="mb-12">
              <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Coming Soon</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Planned <span className="text-muted-foreground">Projects</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {planned.map((project, i) => {
                const Icon = categoryIcons[project.category] ?? Heart;
                return (
                  <motion.div
                    key={project.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.98 }}
                    className="card-elevated p-8 border-2 border-dashed border-primary/20 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    {project.impact_summary && (
                      <p className="text-sm text-muted-foreground italic">{project.impact_summary}</p>
                    )}
                    {project.location && (
                      <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Completed Projects */}
        {completed.length > 0 && (
          <section className="section-container">
            <motion.div {...fadeIn} className="mb-12">
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Completed</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Transformative <span className="text-muted-foreground">Works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((project, i) => {
                const Icon = categoryIcons[project.category] ?? Heart;
                return (
                  <motion.div
                    key={project.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.98 }}
                    className="card-elevated p-6 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={18} className="text-muted-foreground" />
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[project.status]}`}>
                        Completed
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    {project.impact_summary && (
                      <p className="text-xs text-secondary font-medium">{project.impact_summary}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Media Excerpts */}
        <section className="section-container">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Media <span className="text-secondary">Excerpts</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mediaImages.map((image, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
                onClick={() => setSelectedImageIndex(i)}
              >
                <img
                  src={image}
                  alt={`Foundation Media ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <p className="text-white text-sm font-semibold">Foundation Moment {i + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <img
                src={mediaImages[selectedImageIndex]}
                alt={`Foundation Moment ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain rounded-2xl bg-black"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={handleDownloadImage}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                  title="Download image"
                >
                  <Download size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                  title="Close gallery"
                >
                  ✕
                </motion.button>
              </div>
              {selectedImageIndex > 0 && (
                <motion.button
                  whileHover={{ scale: 1.15, x: -4, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors text-xl"
                >
                  ‹
                </motion.button>
              )}
              {selectedImageIndex < mediaImages.length - 1 && (
                <motion.button
                  whileHover={{ scale: 1.15, x: 4, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors text-xl"
                >
                  ›
                </motion.button>
              )}
              <p className="text-center text-white mt-4 text-sm">
                {selectedImageIndex + 1} / {mediaImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Foundation;
