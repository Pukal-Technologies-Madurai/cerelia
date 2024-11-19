export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://www.cerelia.org",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.cerelia.org/product",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },

    {
      url: "https://www.cerelia.org/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://www.cerelia.org/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
