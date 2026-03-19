import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="section-container max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back to News
          </Link>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-1/4" />
              <div className="h-4 bg-muted rounded w-full mt-8" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          ) : post ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="tag-green text-[10px]">
                  <Tag size={12} />
                  {post.category.toUpperCase()}
                </span>
                {post.published_at && (
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {format(new Date(post.published_at), "MMMM d, yyyy")}
                  </span>
                )}
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed border-l-4 border-primary pl-6">
                  {post.excerpt}
                </p>
              )}

              <div className="prose prose-lg max-w-none text-foreground leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h2 className="font-display text-2xl font-bold mb-4">Post not found</h2>
              <Link to="/blog" className="text-primary font-semibold">
                Back to News
              </Link>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
