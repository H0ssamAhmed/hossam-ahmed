
import { ArticleData } from "@/pages/ArticlePage";

// Sample article content in BlockNote format
const sampleArticles: Record<string, ArticleData> = {
  "building-accessible-web-applications": {
    id: "1",
    title: "Building Accessible Web Applications: A Complete Guide",
    excerpt: "Learn how to make your web applications accessible to all users with practical examples and best practices.",
    date: "April 10, 2023",
    readTime: "8 min read",
    author: "John Doe",
    language: "en",
    content: {
      "version": 1,
      "content": [
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Introduction",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "1"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Accessibility is a crucial aspect of web development that ensures all users, including those with disabilities, can access and interact with web applications. In this guide, we'll explore practical examples and best practices for building accessible web applications."
            }
          ],
          "id": "2"
        },
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Why Accessibility Matters",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "3"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Web accessibility is not just about compliance with regulations like the Americans with Disabilities Act (ADA) or the Web Content Accessibility Guidelines (WCAG). It's about creating inclusive experiences that work for everyone, regardless of their abilities or disabilities."
            }
          ],
          "id": "4"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Some key benefits include:"
            }
          ],
          "id": "5"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Reaching a wider audience"
            }
          ],
          "id": "6"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Improving user experience for everyone"
            }
          ],
          "id": "7"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Better SEO and compliance with legal requirements"
            }
          ],
          "id": "8"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Demonstrating social responsibility"
            }
          ],
          "id": "9"
        },
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Key Principles of Web Accessibility",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "10"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "The WCAG 2.1 guidelines are organized around four principles, often referred to as POUR:"
            }
          ],
          "id": "11"
        },
        {
          "type": "heading",
          "props": {
            "level": 3,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "1. Perceivable",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "12"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Information and user interface components must be presentable to users in ways they can perceive."
            }
          ],
          "id": "13"
        }
      ]
    }
  },
  "state-management-in-react": {
    id: "2",
    title: "State Management in React: Context API vs Redux",
    excerpt: "Compare different state management approaches in React applications and learn when to use each one.",
    date: "March 22, 2023",
    readTime: "6 min read",
    author: "Jane Smith",
    language: "en",
    content: {
      "version": 1,
      "content": [
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Introduction to State Management",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "1"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Managing state effectively is one of the most challenging aspects of building React applications. As applications grow in complexity, so does the need for robust state management solutions."
            }
          ],
          "id": "2"
        },
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Context API",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "3"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "React's Context API provides a way to share values between components without having to explicitly pass props through every level of the component tree. It's built into React and doesn't require any additional libraries."
            }
          ],
          "id": "4"
        },
        {
          "type": "heading",
          "props": {
            "level": 3,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Advantages of Context API:",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "5"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Built into React"
            }
          ],
          "id": "6"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Simpler to set up compared to Redux"
            }
          ],
          "id": "7"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Sufficient for many small to medium-sized applications"
            }
          ],
          "id": "8"
        }
      ]
    }
  },
  "تطوير-تطبيقات-ويب-حديثة": {
    id: "3",
    title: "تطوير تطبيقات ويب حديثة باستخدام React",
    excerpt: "دليل شامل لتطوير تطبيقات ويب حديثة باستخدام React وأدوات التطوير الحديثة",
    date: "10 أبريل، 2023",
    readTime: "10 دقائق للقراءة",
    author: "محمد أحمد",
    language: "ar",
    content: {
      "version": 1,
      "content": [
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "مقدمة في React",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "1"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "React هي مكتبة جافاسكريبت مفتوحة المصدر لبناء واجهات المستخدم. تم تطويرها بواسطة فيسبوك وتستخدم لبناء تطبيقات الويب أحادية الصفحة. تعتبر React من أكثر مكتبات جافاسكريبت استخداماً في العالم."
            }
          ],
          "id": "2"
        },
        {
          "type": "heading",
          "props": {
            "level": 2,
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "مميزات React",
              "styles": {
                "bold": true
              }
            }
          ],
          "id": "3"
        },
        {
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "تتميز React بالعديد من المميزات التي تجعلها الخيار الأمثل لتطوير تطبيقات الويب الحديثة:"
            }
          ],
          "id": "4"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "أداء عالي باستخدام نظام DOM الافتراضي"
            }
          ],
          "id": "5"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "نهج قائم على المكونات"
            }
          ],
          "id": "6"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "تعلم سهل نسبياً"
            }
          ],
          "id": "7"
        },
        {
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "right"
          },
          "content": [
            {
              "type": "text",
              "text": "دعم قوي من المجتمع"
            }
          ],
          "id": "8"
        }
      ]
    }
  }
};

export const fetchArticle = async (slug: string): Promise<ArticleData | null> => {
  // In a real app, this would fetch from an API
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(sampleArticles[slug] || null);
    }, 500);
  });
};

export const fetchArticlesList = async () => {
  // In a real app, this would fetch from an API
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const articles = Object.keys(sampleArticles).map((slug) => ({
        id: sampleArticles[slug].id,
        slug,
        title: sampleArticles[slug].title,
        excerpt: sampleArticles[slug].excerpt,
        date: sampleArticles[slug].date,
        readTime: sampleArticles[slug].readTime,
        author: sampleArticles[slug].author,
        language: sampleArticles[slug].language,
      }));
      resolve(articles);
    }, 500);
  });
};
