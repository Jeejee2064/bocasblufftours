// app/robots.js
// Next.js App Router robots — automatically served at /robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
      },
    ],
    sitemap:  "https://bocasblufftours.com/sitemap.xml",
    host:     "https://bocasblufftours.com",
  };
}