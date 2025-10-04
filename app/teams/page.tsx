export const metadata = {
  title: "Teams | RAS CUI Lahore",
  description: "Meet the teams of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus. Discover the talent driving innovation.",
  openGraph: {
    title: "Teams | RAS CUI Lahore",
    description: "Meet the teams of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/teams",
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
    title: "Teams | RAS CUI Lahore",
    description: "Meet the teams of the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import TeamsPage from "@/teams/teams-page"

export default function Page() {
  return <TeamsPage />
}
