// app/sitemap.js
// Next.js App Router sitemap — automatically served at /sitemap.xml

export default function sitemap() {
  const base = "https://bocasblufftours.com";
  const lastModified = new Date();

  return [
    {
      url:             `${base}`,
      lastModified,
      changeFrequency: "monthly",
      priority:        1.0,
      alternates: {
        languages: {
          en: `${base}`,
          es: `${base}/es`,
        },
      },
    },
    {
      url:             `${base}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority:        1.0,
      alternates: {
        languages: {
          en: `${base}`,
          es: `${base}/es`,
        },
      },
    },
  ];
}