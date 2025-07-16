
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/Footer";
import { Pointer } from "@/components/magicui/pointer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TanviStudio | Creative Digital Agency",
  description:
    "TanviStudio helps brands grow online through expert video editing, social media ads, graphic design, web design, and digital marketing solutions.",
  keywords: [
    "TanviStudio",
    "video editing",
    "ad design",
    "graphic design",
    "Facebook ads",
    "Instagram ads",
    "digital agency",
    "branding",
    "logo design",
    "creative agency",
  ],
  authors: [{ name: "TanviStudio", url: "https://tanvistudio.com" }],
  creator: "TanviStudio",
  metadataBase: new URL("https://tanvistudio.com"),
  openGraph: {
    title: "TanviStudio | Creative Digital Agency",
    description:
      "Boost your business with engaging ads, stunning visuals, and high-converting design. Explore our full-service creative studio today.",
    url: "https://tanvistudio.com",
    siteName: "TanviStudio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "TanviStudio Website Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TanviStudio | Creative Digital Agency",
    description:
      "Boost your brand with professional ad campaigns, video editing, and graphic design by TanviStudio.",
    images: ["/opengraph-image.jpg"],
    creator: "@tanvistudio",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will handle metadata injection here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Pointer className="fill-purple-500" />
        {/* <SmoothCursor /> */}
        <Footer />
      </body>
    </html>
  );
}




