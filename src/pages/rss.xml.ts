import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import type { BlogType } from "../content.config";

export async function GET(context: APIContext) {
  if (!context.site) {
    return new Response("Site is not defined on the request context", {
      status: 500,
    });
  }

  const blogs: BlogType[] = await getCollection("blogs");
  return rss({
    // stylesheet: "/pretty-feed-v3.xsl",
    title: "Geraint Guan",
    description: "Geraint Guan's personal software & product development blog.",
    site: context.site,
    trailingSlash: false,
    items: blogs.map((blog: BlogType) => ({
      title: blog.data.title,
      description: blog.data.description,
      pubDate: blog.data.date,
      author: blog.data.author,
      link: `/${blog.data.slug}`,
    })),
  });
}
