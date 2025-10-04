export const metadata = {
  title: "RASWARS | RAS CUI Lahore",
  description: "Learn about RASWARS, the robotics competition hosted by the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus. Compete, innovate, and win!",
  openGraph: {
    title: "RASWARS | RAS CUI Lahore",
    description: "Learn about RASWARS, the robotics competition hosted by the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/raswars",
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
    title: "RASWARS | RAS CUI Lahore",
    description: "Learn about RASWARS, the robotics competition hosted by the Robotics & Automation Society at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import Navbar from "@/components/shared/navbar"
import RaswarsPage from "@/raswars/raswars-page"

export default function Raswars() {
  return (
    <>
      <Navbar />
      <RaswarsPage />
    </>
  )
}
