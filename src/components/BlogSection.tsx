import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { blogPosts } from "../data/content";

const BlogSection = () => {
  return (
    <section id="blog" className="bg-cloud py-20 text-midnight">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          subtitle="RECENT POSTS"
          title="Our latest news from blog"
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-3xl border border-mist bg-white shadow-card"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full rounded-t-3xl object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
                  {post.category}
                </div>
                <p className="mt-2 text-sm text-slate">{post.date}</p>
                <h3 className="mt-4 flex-1 text-xl font-semibold text-midnight">
                  {post.title}
                </h3>
                <button className="mt-6 text-sm font-semibold text-accent2">
                  Read All Articles →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
