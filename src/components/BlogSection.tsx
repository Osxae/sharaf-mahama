import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const BlogSection = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts-home"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="news" className="section-container">
      <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
            News & Updates
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-muted-foreground">Activities</span>
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest news, events, and announcements.
          </p>
        </div>
        <Link
          to="/blog"
          className="btn-dark inline-flex items-center gap-2 shrink-0"
        >
          View All Posts <ArrowRight size={16} />
        </Link>
      </motion.div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-elevated p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-1/3 mb-4" />
              <div className="h-6 bg-muted rounded w-full mb-3" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {posts?.map((post, i) => (
            <motion.article
              key={post.id}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card-elevated overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="tag-green text-[10px]">
                    <Newspaper size={12} />
                    {post.category.toUpperCase()}
                  </span>
                  {post.published_at && (
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(post.published_at), "MMM d, yyyy")}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSection;
