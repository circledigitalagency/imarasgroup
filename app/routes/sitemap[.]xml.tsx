import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);

    const baseUrl = `${url.protocol}//${url.host}`;

    const pages = [
        "/",
        "/about-us",
        "/contact",
        "/experience",
        "/services",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
            .map(
                (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>
  `,
            )
            .join("")}
</urlset>`;

    return new Response(sitemap, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
