import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MedWrite Global Solutions — Professional Network for Medical Communicators",
  description:
    "Join a member-driven professional network for medical writers, editors, publication professionals and regulatory communicators. Learning, community, career support and standards — all in one place.",
  keywords: [
    "medical writing",
    "medical communication",
    "professional association",
    "medical writers",
    "regulatory writing",
    "publications",
    "healthcare communication",
  ],
  openGraph: {
    title: "MedWrite Global Solutions",
    description:
      "Strengthen the people and practices behind responsible medical communication.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pb-24 md:pb-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
