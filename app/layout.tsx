import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SETU Technologies | Bridging Ideas and Technology",
  description:
    "SETU Technologies builds thoughtful websites, practical automation, and custom software to help businesses work smarter and grow.",
  openGraph: {
    title: "SETU Technologies | Bridging Ideas and Technology",
    description:
      "Thoughtful digital experiences, practical automation, and custom software for growing businesses.",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "SETU Technologies - Bridging Ideas and Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SETU Technologies | Bridging Ideas and Technology",
    description:
      "Thoughtful digital experiences, practical automation, and custom software for growing businesses.",
    images: ["/og"],
  },
  ...(process.env.SITE_URL
    ? { alternates: { canonical: new URL("/", process.env.SITE_URL).toString() } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <Providers>
          <NavBar />
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
