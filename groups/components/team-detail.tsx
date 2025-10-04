"use client"

import type { Team } from "../data/teams-data"
import Link from "next/link"

interface TeamDetailProps {
  team: Team
}

export default function TeamDetail({ team }: TeamDetailProps) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/groups"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#aa0033] transition-colors duration-300 mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Groups</span>
        </Link>

        {/* Team Header */}
        <div className="bg-[#2a2a2a] rounded-2xl p-8 md:p-12 mb-8 border border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-7xl md:text-8xl p-6 rounded-2xl" style={{ backgroundColor: `${team.color}20` }}>
              {team.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{team.name}</h1>
              <p className="text-gray-400 text-lg leading-relaxed">{team.description}</p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#2a2a2a] rounded-2xl p-8 mb-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#aa0033]">🎯</span>
            Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">{team.mission}</p>
        </div>

        {/* Responsibilities */}
        <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#aa0033]">📋</span>
            Key Responsibilities
          </h2>
          <ul className="space-y-4">
            {team.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: team.color }} />
                <span className="text-gray-300 leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Team Members Section (Placeholder) */}
        <div className="bg-[#2a2a2a] rounded-2xl p-8 mt-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#aa0033]">👥</span>
            Team Members
          </h2>
          <p className="text-gray-400 text-center py-8">Team member profiles coming soon...</p>
        </div>
      </div>
    </div>
  )
}
