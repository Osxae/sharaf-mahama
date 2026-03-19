import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowLeft, MapPin, Calendar, Users, Ticket, Trophy, Target, Zap, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

// Import media images
import h1 from "@/assets/h (1).jpg";
import h2 from "@/assets/h (2).jpg";
import h3 from "@/assets/h (3).jpg";
import h4 from "@/assets/h (4).jpg";
import h5 from "@/assets/h (5).jpg";
import h6 from "@/assets/h (6).jpg";
import h7 from "@/assets/h (7).jpg";
import h8 from "@/assets/h (8).jpg";
import h9 from "@/assets/h (9).jpg";
import h10 from "@/assets/h (10).jpg";
import h11 from "@/assets/h (11).jpg";
import h12 from "@/assets/h (12).jpg";
import h13 from "@/assets/h (13).jpg";
import h14 from "@/assets/h (14).jpg";
import h15 from "@/assets/h (15).jpg";
import ho1 from "@/assets/ho (1).jpg";
import ho2 from "@/assets/ho (2).jpg";

const bookingSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  num_tickets: z.number().min(1).max(20),
});

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

const LegacyRiseSports = () => {
  const [bookingEventId, setBookingEventId] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({ full_name: "", email: "", phone: "", num_tickets: 1 });
  const [submitting, setSubmitting] = useState(false);

  const handleDownloadImage = async () => {
    if (selectedImageIndex === null) return;
    try {
      const imageUrl = mediaImages[selectedImageIndex];
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `legacy-rise-moment-${selectedImageIndex + 1}.jpg`;
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const mediaImages = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, ho1, ho2];

  const { data: upcomingEvents } = useQuery({
    queryKey: ["events-upcoming"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_upcoming", true)
        .order("event_date", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: pastEvents } = useQuery({
    queryKey: ["events-past"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_upcoming", false)
        .order("event_date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingEventId) return;

    const parsed = bookingSchema.safeParse(bookingForm);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("event_bookings").insert({
      event_id: bookingEventId,
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      num_tickets: parsed.data.num_tickets,
    });

    setSubmitting(false);
    if (error) {
      toast.error("Booking failed. Please try again.");
    } else {
      toast.success("Booking confirmed! Check your email for details.");
      setBookingEventId(null);
      setBookingForm({ full_name: "", email: "", phone: "", num_tickets: 1 });
    }
  };

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
              <div className="p-3 rounded-xl bg-primary/10">
                <Trophy size={28} className="text-primary" />
              </div>
              <div>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                  Legacy Rise <span className="text-primary">Sports</span>
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...slideInLeft}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Legacy Rise Sports is a premier African sports promotion and talent development company dedicated to discovering, nurturing, and elevating athletic excellence across Ghana and the wider continent. With a clear vision to transform the sports industry, the organization serves as a bridge between grassroots talent and the global stage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Sharaf Mahama, Legacy Rise Sports focuses on identifying promising athletes at the community level and providing them with the resources, exposure, and professional guidance needed to succeed. Through structured development programs, scouting initiatives, and strategic partnerships, the company ensures that raw talent is refined into world-class performance.
              </p>
            </motion.div>

            <motion.div {...slideInRight}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beyond talent discovery, Legacy Rise Sports plays a key role in sports promotion—organizing high-profile events, competitions, and showcases that spotlight African athletes while attracting international attention. The organization also offers consultancy services aimed at improving sports management, athlete branding, and infrastructure development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Driven by innovation and a commitment to excellence, Legacy Rise Sports is not only building careers but also contributing to the growth of the sports ecosystem in Africa. Its mission goes beyond competition—empowering youth, creating opportunities, and positioning Africa as a powerhouse of global sporting talent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats strip */}
        <div className="surface-dark py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Target, num: "500+", label: "Athletes" },
              { icon: Zap, num: "50+", label: "Events Hosted" },
              { icon: Users, num: "25K+", label: "Followers" },
              { icon: Trophy, num: "5", label: "Years Running" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ ...fadeIn.transition, delay: i * 0.1 }}>
                <s.icon size={20} className="mx-auto mb-2 text-primary" />
                <p className="stat-value text-3xl">{s.num}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="section-container">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Upcoming</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents?.map((event, i) => (
              <motion.div
                key={event.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                className="card-elevated p-6 md:p-8 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="tag-green text-[10px] uppercase">{event.category}</span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {format(new Date(event.event_date), "MMM d, yyyy • h:mm a")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {event.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {event.location}
                        </span>
                      )}
                      {event.max_capacity && (
                        <span className="flex items-center gap-1.5">
                          <Users size={14} /> {event.max_capacity - event.tickets_sold} spots left
                        </span>
                      )}
                      {event.ticket_price !== null && event.ticket_price > 0 && (
                        <span className="flex items-center gap-1.5">
                          <Ticket size={14} /> GHS {Number(event.ticket_price).toFixed(2)}
                        </span>
                      )}
                      {event.ticket_price !== null && event.ticket_price === 0 && (
                        <span className="flex items-center gap-1.5 text-secondary font-semibold">
                          <Ticket size={14} /> FREE
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-end lg:items-center">
                    <button
                      onClick={() => setBookingEventId(bookingEventId === event.id ? null : event.id)}
                      className="btn-primary whitespace-nowrap"
                    >
                      {bookingEventId === event.id ? "Close" : "Book Now"}
                    </button>
                  </div>
                </div>

                {/* Booking form */}
                {bookingEventId === event.id && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-border"
                    onSubmit={handleBooking}
                  >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        maxLength={100}
                        value={bookingForm.full_name}
                        onChange={(e) => setBookingForm((f) => ({ ...f, full_name: e.target.value }))}
                        className="rounded-xl p-3 border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        maxLength={255}
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm((f) => ({ ...f, email: e.target.value }))}
                        className="rounded-xl p-3 border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        maxLength={20}
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm((f) => ({ ...f, phone: e.target.value }))}
                        className="rounded-xl p-3 border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                      />
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min={1}
                          max={20}
                          value={bookingForm.num_tickets}
                          onChange={(e) => setBookingForm((f) => ({ ...f, num_tickets: parseInt(e.target.value) || 1 }))}
                          className="rounded-xl p-3 border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary w-20"
                        />
                        <button type="submit" disabled={submitting} className="btn-primary flex-1 justify-center">
                          {submitting ? "Booking..." : "Confirm"}
                        </button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </motion.div>
            ))}

            {upcomingEvents?.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <Calendar size={48} className="mx-auto mb-4 opacity-40" />
                <p className="text-lg">No upcoming events at the moment. Stay tuned!</p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="section-container bg-accent/50">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Archive</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Past <span className="text-muted-foreground">Events</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents?.map((event, i) => (
              <motion.div
                key={event.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                className="card-elevated p-6 opacity-90"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-muted text-muted-foreground">
                    {event.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(event.event_date), "MMM d, yyyy")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{event.description}</p>
                {event.location && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} /> {event.location}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Media Excerpts */}
        <section className="section-container">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Media <span className="text-primary">Excerpts</span>
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
                  alt={`Media Excerpt ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <p className="text-white text-sm font-semibold">Legacy Rise Moment {i + 1}</p>
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
                alt={`Legacy Rise Moment ${selectedImageIndex + 1}`}
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

export default LegacyRiseSports;
