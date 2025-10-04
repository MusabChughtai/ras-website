import ContributorCard from "./components/contributor-card"
import { contributorsData } from "./data/contributors-data"

export default function ContributorsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contributors</h1>
          <p className="text-xl text-gray-300">Meet the talented individuals who made this platform possible</p>
        </div>

        {/* Contributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributorsData.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </div>
    </main>
  )
}
