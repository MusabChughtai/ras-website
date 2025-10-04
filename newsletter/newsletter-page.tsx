import NewsletterCard from "./components/newsletter-card"
import { newslettersData } from "./data/newsletter-data"

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Newsletter</h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest news, events, and achievements from RAS
          </p>
        </div>

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newslettersData.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      </div>
    </main>
  )
}
