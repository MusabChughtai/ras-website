import Navbar from "@/components/shared/navbar"
import Hero from "./components/hero"
import WhyUs from "./components/why-us"
import Events from "./components/events"
import Stats from "./components/stats"
import Register from "./components/register"
import Footer from "./components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <Hero />
      <WhyUs />
      <Events />
      <Stats />
      <Register />
      <Footer />
    </div>
  )
}
