"use client"

import Image from "next/image"
import { useState } from "react"
import type { Sponsor } from "../data/sponsors-data"
import { ExternalLink } from "lucide-react"

interface SponsorCardProps {
  sponsor: Sponsor
}

const tierColors = {
  platinum: "border-gray-300 hover:border-gray-100",
  gold: "border-yellow-600 hover:border-yellow-400",
  silver: "border-gray-500 hover:border-gray-400",
  bronze: "border-orange-700 hover:border-orange-500",
}

const tierBadgeColors = {
  platinum: "bg-gray-300 text-gray-900",
  gold: "bg-yellow-600 text-white",
  silver: "bg-gray-500 text-white",
  bronze: "bg-orange-700 text-white",
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={`bg-[#2a2a2a] rounded-lg overflow-hidden border-2 ${tierColors[sponsor.tier]} transition-all duration-300 group`}
    >
      <div className="p-8">
        {/* Tier Badge */}
        <div className="flex justify-center mb-6">
          <span
            className={`${tierBadgeColors[sponsor.tier]} px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide`}
          >
            {sponsor.tier}
          </span>
        </div>

        {/* Logo */}
        <div className="relative w-full h-40 mb-6 bg-white rounded-lg flex items-center justify-center p-4">
          {!imageError ? (
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              fill
              className="object-contain p-4"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-gray-400 text-center">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-sm">{sponsor.name}</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-3">{sponsor.name}</h3>
          <p className="text-gray-300 leading-relaxed">{sponsor.description}</p>
        </div>

        {/* Website Link */}
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#aa0033] text-white px-6 py-3 rounded-lg hover:bg-[#880002] transition-colors duration-300 font-semibold"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
