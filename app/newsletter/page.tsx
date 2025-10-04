export const metadata = {
  title: "Newsletter | RAS CUI Lahore",
  description: "Subscribe to the RAS CUI Lahore newsletter for the latest updates, events, and news from the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus.",
  openGraph: {
    title: "Newsletter | RAS CUI Lahore",
    description: "Subscribe to the RAS CUI Lahore newsletter for the latest updates, events, and news.",
    url: "https://rascui.com/newsletter",
    siteName: "RAS CUI Lahore",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        width: 400,
        height: 400,
        alt: "RAS Mascot Logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter | RAS CUI Lahore",
    description: "Subscribe to the RAS CUI Lahore newsletter for the latest updates, events, and news.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import Navbar from "@/components/shared/navbar"
import NewsletterPage from "@/newsletter/newsletter-page"

export default function Newsletter() {
  return (
    <>
      <Navbar />
      <NewsletterPage />
    </>
  )
}
