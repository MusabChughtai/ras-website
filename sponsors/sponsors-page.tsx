import SponsorCard from "./components/sponsor-card"
import { sponsorsData } from "./data/sponsors-data"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-300">
            Thank you to our amazing sponsors who make our events and initiatives possible
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sponsorsData.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-20 text-center">
          <div className="bg-[#2a2a2a] border border-gray-700 rounded-lg p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Sponsor</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Partner with RAS CUI Lahore to support innovation and empower the next generation of engineers
            </p>
            <a
              href="mailto:ras@cuilahore.edu.pk"
              className="inline-block bg-[#aa0003] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#880002] transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
