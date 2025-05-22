import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // avoids FOIT
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ishant Nimje | Full Stack Developer",
  description: "Portfolio website of Ishant Nimje - Full Stack Developer skilled in Next.js, React, Node.js, and more.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Ishant Nimje | Full Stack Developer",
    description: "Aspiring Cloud Engineer learning Terraform, Docker, and CI/CD. Portfolio showcasing full stack and cloud journey.",
    url: "https://my-portfolio-green-sigma-40.vercel.app/",
    siteName: "Ishant Nimje Portfolio",
    images: [
      {
        url: "https://my-portfolio-green-sigma-40.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Ishant Nimje Portfolio OG Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishant Nimje | Full Stack Developer",
    description: "Aspiring Cloud Engineer | Full Stack Developer",
    images: ["https://my-portfolio-green-sigma-40.vercel.app/og-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
