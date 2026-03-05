import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Footer } from "./components/footer";
import Navbar from "./components/topnav";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta = () => [
  { property: "og:title", content: "IMARA Project Services" },
  {
    property: "og:description",
    content:
      "Structured infrastructure delivery, project management, and asset lifecycle solutions.",
  },
  {
    property: "og:image",
    content: "https://yourdomain.com/og-image.jpg",
  },
  { property: "og:type", content: "website" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionCompany",
              name: "IMARA Project Services",
              url: "https://imaraps.co.za",
              logo: "https://yourdomain.com/logo.png",
              description:
                "IMARA provides infrastructure project delivery, construction supervision, facilities management, and asset lifecycle solutions across South Africa.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27837848001",
                contactType: "customer service",
              },
              areaServed: {
                "@type": "Country",
                name: "South Africa",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-white">
        <div className="min-h-screen bg-gradient-to-b from-base-900 via-base-850 to-base-950 text-white">
          <Navbar />

          <main className="relative mx-auto w-full container px-6 pt-10 pb-16">
            <Outlet />
          </main>

          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
