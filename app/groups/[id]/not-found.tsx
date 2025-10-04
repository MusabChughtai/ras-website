import Link from "next/link"
import Navbar from "@/components/shared/navbar"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#aa0033] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Group Not Found</h2>
          <p className="text-gray-400 mb-8">The group you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/groups"
            className="inline-flex items-center gap-2 bg-[#aa0033] text-white px-6 py-3 rounded-lg hover:bg-[#880002] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Groups
          </Link>
        </div>
      </div>
    </div>
  )
}
