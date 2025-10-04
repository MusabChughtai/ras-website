export const metadata = {
  title: "RAS Fiesta | RAS CUI Lahore",
  description: "Discover RAS Fiesta, the flagship event of the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus. Join us for innovation, learning, and fun!",
  openGraph: {
    title: "RAS Fiesta | RAS CUI Lahore",
    description: "Discover RAS Fiesta, the flagship event of the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/ras-fiesta",
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
    title: "RAS Fiesta | RAS CUI Lahore",
    description: "Discover RAS Fiesta, the flagship event of the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import Navbar from "@/components/shared/navbar"
import RasFiestaPage from "@/ras-fiesta/ras-fiesta-page"

export default function RasFiesta() {
  return (
    <>
      <Navbar />
      <RasFiestaPage />
    </>
  )
}
