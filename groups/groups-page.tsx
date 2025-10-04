import TeamGrid from "./components/team-grid"
import Navbar from "@/components/shared/navbar"
import Footer from "@/landing-page/components/footer"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <div className="pt-20">
        <TeamGrid />
      </div>
      <Footer />
    </div>
  )
}
