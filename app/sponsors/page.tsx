export const metadata = {
  title: "Sponsors | RAS CUI Lahore",
  description: "Meet the sponsors supporting the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus. Partner with us for innovation!",
  openGraph: {
    title: "Sponsors | RAS CUI Lahore",
    description: "Meet the sponsors supporting the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/sponsors",
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
    title: "Sponsors | RAS CUI Lahore",
    description: "Meet the sponsors supporting the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import Navbar from "@/components/shared/navbar"
import SponsorsPage from "@/sponsors/sponsors-page"

export default function Sponsors() {
  return (
    <>
      <Navbar />
      <SponsorsPage />
    </>
  )
}
