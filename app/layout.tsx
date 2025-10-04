import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RAS - Robotics & Automation Society | CUI Lahore",
    template: "%s",
  },
  description: "Robotics & Automation Society (RAS) - Student Chapter at COMSATS University Islamabad, Lahore Campus. Join the most innovative robotics and automation community.",
  applicationName: "RAS CUI Lahore",
  publisher: "RAS CUI Lahore",
  category: "Student Society, Robotics, Automation, Engineering, Technology",
  generator: "Next.js",
  keywords: [
    "Robotics",
    "Automation",
    "IEEE",
    "COMSATS",
    "CUI Lahore",
    "Student Chapter",
    "RAS",
    "RAS CUI Lahore",
    "Robotics Society",
    "Automation Society",
    "Robotics Club",
    "Automation Club",
    "IEEE RAS",
    "COMSATS University",
    "Islamabad Campus",
    "Lahore Campus",
    "Engineering",
    "Technology",
    "Workshops",
    "Competitions"
  ],
  authors: [
    { name: "RAS CUI Lahore", url: "https://www.facebook.com/rascuilhr/" }
  ],
  creator: "RAS CUI Lahore",
  metadataBase: new URL("https://rascui.com/"),
  alternates: {
    canonical: "https://rascui.com/",
    languages: {
      en: "https://rascui.com/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://rascui.com/",
    title: "RAS - Robotics & Automation Society | CUI Lahore",
    description: "Join the most innovative robotics and automation community at COMSATS University Islamabad, Lahore Campus.",
    siteName: "RAS CUI Lahore",
  locale: "en_PK",
  alternateLocale: ["en_US", "en_GB"],
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        width: 1200,
        height: 630,
        alt: "RAS - Robotics & Automation Society | CUI Lahore",
      },
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        width: 400,
        height: 400,
        alt: "RAS Mascot Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rascuilhr",
    title: "RAS - Robotics & Automation Society | CUI Lahore",
    description: "Join the most innovative robotics and automation community at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS - Robotics & Automation Society | CUI Lahore",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    noarchive: false,
    nocache: false,
  },
  icons: [
    { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
    { rel: "icon", type: "image/x-icon", sizes: "any", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "RAS CUI Lahore",
  },
  other: {
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollegeOrUniversity',
      name: 'Robotics & Automation Society (RAS) - CUI Lahore',
      url: 'https://rascui.com/',
      logo: 'https://rascui.com/images/ieee-mascot.webp',
      image: 'https://rascui.com/images/ieee-mascot.webp',
      description: 'Robotics & Automation Society (RAS) - Student Chapter at COMSATS University Islamabad, Lahore Campus. Join the most innovative robotics and automation community.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'COMSATS University Islamabad, Lahore Campus',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '54000',
        addressCountry: 'PK',
      },
      email: 'ieeerascui@gmail.com',
      sameAs: [
        'https://www.facebook.com/rascuilhr/',
        'https://www.instagram.com/ras.cui/',
        'https://rascui.com/',
      ],
    }),
    contact: JSON.stringify({
      email: 'ieeerascui@gmail.com',
      address: 'COMSATS University Islamabad, Lahore Campus, Lahore, Punjab, 54000, PK',
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
