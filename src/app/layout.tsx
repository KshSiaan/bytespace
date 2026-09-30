import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: "/fonts/ClashDisplay-Bold.woff2",
  variable: "--font-clash-display",
});
const satoshi = localFont({
  src: "/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "ByteSpace | Online Courses to Learn, Create & Grow",
  description:
    "Explore online courses in design, development, business, marketing, IT, photography, and more. Learn new skills, advance your career, and share your expertise with ByteSpace.",
  keywords: [
    "ByteSpace",
    "online courses",
    "online learning",
    "learn online",
    "professional courses",
    "skill development",
    "career development",
    "design courses",
    "web development courses",
    "IT courses",
    "business courses",
    "marketing courses",
    "photography courses",
    "course marketplace",
    "online education",
  ],
  applicationName: "ByteSpace",
  authors: [{ name: "ByteSpace" }],
  creator: "ByteSpace",
  publisher: "ByteSpace",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ByteSpace",
    title: "ByteSpace | Online Courses to Learn, Create & Grow",
    description:
      "Discover online courses designed to help you build skills, grow your career, and learn from creators across design, development, business, marketing, IT, and more.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpace | Online Courses to Learn, Create & Grow",
    description:
      "Explore online courses, build valuable skills, advance your career, and share your expertise with ByteSpace.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        clashDisplay.variable,
        satoshi.className,
      )}
    >
      <body className="min-h-full flex flex-col">
        {children} <Toaster />
      </body>
    </html>
  );
}
