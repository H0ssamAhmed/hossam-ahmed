
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlockNote, BlockNoteViewRaw } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchArticle } from "@/lib/articleService";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  content: any; // BlockNote format
  date: string;
  readTime: string;
  author: string;
  language: "en" | "ar";
}

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { theme, direction } = useTheme();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize the editor using the useBlockNote hook with the correct options
  const editor = useBlockNote({
    // Remove the editable property since it's not supported
    initialContent: article?.content,
    // Add this option to make it read-only
    domAttributes: {
      editor: {
        class: "readonly"
      }
    }
  });

  useEffect(() => {
    const loadArticle = async () => {
      try {
        if (!slug) {
          navigate("/articles");
          return;
        }

        setLoading(true);
        const data = await fetchArticle(slug);

        // Update document direction based on article language
        if (data) {
          document.documentElement.dir = data.language === "ar" ? "rtl" : "ltr";
          setArticle(data);
        } else {
          navigate("/articles");
        }
      } catch (error) {
        console.error("Failed to load article:", error);
        navigate("/articles");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();

    // Cleanup function to reset direction
    return () => {
      document.documentElement.dir = direction;
    };
  }, [slug, navigate, direction]);

  // Update the editor content when the article changes
  useEffect(() => {
    if (editor && article?.content) {
      editor.replaceBlocks(article.content);
    }
  }, [article, editor]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col gap-4 w-full max-w-4xl px-4">
            <div className="h-12 bg-muted rounded-md w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted rounded-md w-1/4 mx-auto"></div>
            <div className="h-72 bg-muted rounded-md w-full"></div>
            <div className="h-32 bg-muted rounded-md w-full"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate("/articles")}
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Articles
          </Button>

          <Card className="overflow-hidden mb-8">
            <div className="p-6 md:p-8 lg:p-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {article.date}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {article.readTime}
                </span>
                <span>{article.author}</span>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                {editor && (
                  <BlockNoteView
                    editor={editor}
                    theme={theme === "dark" ? "dark" : "light"}
                  />
                )}
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
