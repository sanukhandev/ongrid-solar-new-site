"use client";

import content from "@/data/content.json";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContentType = {
  blog: {
    title: string;
    subtitle: string;
    posts: {
      id: string;
      title: string;
      excerpt: string;
      category: string;
    }[];
  };
};

export function Blog() {
  const data = content as unknown as ContentType;

  const categoryColors = {
    Guide: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    Finance:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Maintenance:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Policy:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  };

  return (
    <section
      id="blog"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            {data.blog.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {data.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.blog.posts.map((post: any, index: number) => (
            <article
              key={post.id}
              className="glass-card group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[
                        post.category as keyof typeof categoryColors
                      ] || categoryColors.Guide
                    }`}
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    Dec 2025
                  </div>
                </div>

                <h3 className="font-lato font-bold text-xl text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-4">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/20"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
