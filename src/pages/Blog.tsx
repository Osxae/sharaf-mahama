import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowRight, Newspaper, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POSTS_PER_PAGE = 6;

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const Blog = () => {
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["blog-posts", page, category],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("*", { count: "exact" })
        .eq("published", true)
        .order("published_at", { ascending: false })
        .range(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE - 1);

      if (category) query = query.eq("category", category);
      const { data, error, count } = await query;
      if (error) throw error;
      return { posts: data, count: count ?? 0 };
    },
  });

  const totalPages = Math.ceil((data?.count ?? 0) / POSTS_PER_PAGE);
  const categories = ["sports", "philanthropy", "education", "infrastructure", "health"];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-container">
          <motion.div {...fadeIn}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              News & <span className="text-muted-foreground">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Latest activities, announcements, and stories from Legacy Rise Sports and the Sharaf Mahama Foundation.
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => { setCategory(null); setPage(0); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!category ? "bg-foreground text-background" : "bg-accent text-muted-foreground hover:text-foreground"}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setPage(0); }}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${category === cat ? "bg-foreground text-background" : "bg-accent text-muted-foreground hover:text-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card-elevated p-6 animate-pulse">
                  <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-6 bg-muted rounded w-full mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.posts?.map((post, i) => (
                  <motion.article
                    key={post.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: i * 0.05 }}
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
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-16">
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${page === i ? "bg-foreground text-background" : "bg-accent text-muted-foreground hover:text-foreground"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
