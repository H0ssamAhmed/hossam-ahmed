
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';

import { fetchArticlesList } from '@/lib/articleService';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

interface ArticlePreview {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  language: "en" | "ar";
}

const Articles = () => {
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchArticlesList();
        setArticles(data as ArticlePreview[]);
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/*       <Header /> */}
      <Navbar />


      <main className="flex-grow">
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className='py-2 mb-10 text-center text-2xl bg-red-500 font-bold'>Under development</h4>
            <h1 className="text-4xl font-bold mb-4">Articles & Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="animate-pulse bg-card border border-border rounded-xl overflow-hidden">
                  <div className="aspect-[16/9] bg-muted"></div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <div className="h-6 bg-muted rounded-full w-16"></div>
                      <div className="h-6 bg-muted rounded-full w-16"></div>
                    </div>
                    <div className="h-8 bg-muted rounded-md w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded-md w-full mb-1"></div>
                    <div className="h-4 bg-muted rounded-md w-2/3 mb-4"></div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="h-4 bg-muted rounded-md w-24"></div>
                        <div className="h-4 bg-muted rounded-md w-16"></div>
                      </div>
                      <div className="h-4 bg-muted rounded-md w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        <FiTag className="mr-1" size={10} />
                        {article.language === "ar" ? "عربي" : "English"}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      <Link to={`/article/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <FiCalendar size={14} className="mr-1" />
                          {article.date}
                        </span>
                        <span className="flex items-center">
                          <FiClock size={14} className="mr-1" />
                          {article.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/article/${article.slug}`}
                        className="text-primary hover:text-primary/90 transition-colors flex items-center"
                      >
                        {article.language === "ar" ? "قراءة المزيد" : "Read More"} <FiArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
