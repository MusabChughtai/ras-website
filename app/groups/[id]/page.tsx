import type { Metadata } from "next";
import { notFound } from "next/navigation"
import { getTeamById, getAllTeams } from "@/groups/data/teams-data"
import TeamDetail from "@/groups/components/team-detail"
import Navbar from "@/components/shared/navbar"
import Footer from "@/landing-page/components/footer"

export async function generateStaticParams() {
  const teams = getAllTeams()
  return teams.map((team) => ({
    id: team.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const team = getTeamById(params.id)
  if (!team) {
    return {
      title: "Group Not Found - RAS CUI Lahore",
      description: "This group could not be found in the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.",
    }
  }
  return {
    title: `${team.name} - RAS CUI Lahore`,
    description: team.description || `Details and members of the group '${team.name}' in the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.`,
    openGraph: {
      title: `${team.name} - RAS CUI Lahore`,
      description: team.description || `Details and members of the group '${team.name}' in the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.`,
      url: `https://rascui.com/groups/${team.id}`,
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
      title: `${team.name} - RAS CUI Lahore`,
      description: team.description || `Details and members of the group '${team.name}' in the Robotics & Automation Society (RAS) at COMSATS University Islamabad, Lahore Campus.`,
      images: [
        {
          url: "https://rascui.com/images/ieee-mascot.webp",
          alt: "RAS Mascot Logo",
        },
      ],
    },
  }
}

export default function TeamPage({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id)

  if (!team) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <TeamDetail team={team} />
      <Footer />
    </div>
  )
}
