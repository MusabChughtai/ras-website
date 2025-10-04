export const metadata = {
  title: "Groups | RAS CUI Lahore",
  description: "Explore the groups within the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus. Join a group and collaborate!",
  openGraph: {
    title: "Groups | RAS CUI Lahore",
    description: "Explore the groups within the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    url: "https://rascui.com/groups",
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
    title: "Groups | RAS CUI Lahore",
    description: "Explore the groups within the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    images: [
      {
        url: "https://rascui.com/images/ieee-mascot.webp",
        alt: "RAS Mascot Logo",
      },
    ],
  },
};
import GroupsPage from "@/groups/groups-page"

export default function Page() {
  return <GroupsPage />
}
