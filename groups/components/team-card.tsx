"use client"

import Link from "next/link"
import type { Team } from "../data/teams-data"

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/groups/${team.id}`}>
      <div className="group relative bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333333] transition-all duration-300 border border-gray-800 hover:border-[#aa0003] overflow-hidden">
        {/* Background gradient effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at top right, ${team.color}, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{team.icon}</div>

          {/* Team Name */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#aa0003] transition-colors duration-300">
            {team.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{team.description}</p>

          {/* View Details Link */}
          <div className="flex items-center gap-2 text-[#aa0003] font-medium text-sm">
            <span>View Details</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{ backgroundColor: team.color }}
        />
      </div>
    </Link>
  )
}
