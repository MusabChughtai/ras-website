export const metadata = {
  title: "Contributors | RAS CUI Lahore",
  description: "Meet the contributors of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus. Discover the people behind the innovation.",
  openGraph: {
    title: "Contributors | RAS CUI Lahore",
    description: "Meet the contributors of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/contributors",
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
    title: "Contributors | RAS CUI Lahore",
    description: "Meet the contributors of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import Navbar from "@/components/shared/navbar"
import ContributorsPage from "@/contributors/contributors-page"

export default function Contributors() {
  return (
    <>
      <Navbar />
      <ContributorsPage />
    </>
  )
}
