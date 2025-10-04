import Navbar from "@/components/shared/navbar"
import MembersSection from "./components/members-section"
import { executives, chiefs } from "./data/members-data"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Meet Our <span className="text-[#aa0033]">Team</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The brilliant minds driving innovation and excellence at RAS CUI Lahore
            </p>
          </div>

          {/* Executives Section */}
          <MembersSection title="Syndicates • RAS" subtitle="🚨 Executives" members={executives} />

          {/* Chiefs Section */}
          <MembersSection title="Chiefs • RAS" subtitle="🚨 Executive Directors" members={chiefs} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 RAS CUI Lahore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
