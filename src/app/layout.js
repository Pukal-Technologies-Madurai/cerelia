import { Open_Sans, Roboto_Serif } from "next/font/google";

import { Header, Footer } from "./components";
import "@/globals.css";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-serif",
});

export const metadata = {
  title: {
    default: "Cerelia - Welcome to our culinary home",
    template: "%s | Cerelia",
  },
  description:
    "Cerelia: Crafting nutritious and delightful snacks with Popped Pearl Millet and Wheat. Discover our classic flavors like Masala and Salt & Pepper.",
  keywords: [
    "Cerelia",
    "culinary",
    "food",
    "Popped Pearl Millet",
    "Masala",
    "Dahi Crunchy",
    "Popped Pearl",
    "healthy snack",
    "Salt & Pepper",
    "Classic flavored",
    "nutritious",
    "delightful snack",
    "Popped Wheat",
    "nutty flavor",
  ],
  metadataBase: new URL("https://www.cerelia.org"),
  openGraph: {
    title: "Cerelia - Welcome to our culinary home",
    description:
      "Crafting nutritious and delightful snacks with Popped Pearl Millet and Wheat. Discover our classic flavors like Masala and Salt & Pepper.",
    url: "https://www.cerelia.org",
    siteName: "Cerelia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.cerelia.org/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  verification: {
    google: "21f3a0c7251c4da6",
    "facebook-domain-verification": "41npd60s8xov1brloy5ry86n9o7mqg",
  },
  alternates: {
    canonical: "https://www.cerelia.org",
  },
  other: {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "FoodManufacturer",
      name: "Cerelia",
      image: "https://www.cerelia.org/images/logo.png",
      "@id": "https://www.cerelia.org",
      url: "https://www.cerelia.org",
      telephone: "+91 90253 16142",
      address: {
        "@type": "PostalAddress",
        streetAddress: "DP.NO.CS 8, SIDCO Industrial Estate",
        addressLocality: "Madurai",
        addressRegion: "Tamil Nadu",
        postalCode: "625008",
        addressCountry: "India",
      },
      description:
        "Crafting nutritious and delightful snacks with Popped Pearl Millet and Wheat",
      brand: {
        "@type": "Brand",
        name: "Cerelia",
      },
      knowsAbout: [
        "Popped Pearl Millet Snacks",
        "Masala Flavored Snacks",
        "Healthy Wheat Snacks",
      ],
    },
    "facebook-domain-verification": "41npd60s8xov1brloy5ry86n9o7mqg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  creator: "Bala Gopinaath",
  publisher: "Cerelia",
  generator: "Next.js",
  applicationName: "Cerelia",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Bala Gopinaath" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} ${robotoSerif.variable} font-sans`}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </body>
    </html>
  );
}
