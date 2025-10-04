"use client"

import Image from "next/image"
import { useState } from "react"
import type { Contributor } from "../data/contributors-data"
import { Linkedin, Github, Globe } from "lucide-react"

interface ContributorCardProps {
  contributor: Contributor
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-gray-700 hover:border-[#aa0003] transition-all duration-300 group">
      <div className="p-8">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-[#1a1a1a] border-4 border-[#aa0003]">
          {!imageError ? (
            <Image
              src={contributor.imageUrl || "/placeholder.svg"}
              alt={contributor.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{contributor.name}</h3>
          <p className="text-[#aa0003] font-semibold mb-4">{contributor.role}</p>
          <p className="text-gray-300 leading-relaxed">{contributor.description}</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {contributor.linkedIn && (
            <a
              href={contributor.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#aa0003] transition-colors duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
          )}
          {contributor.github && (
            <a
              href={contributor.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#aa0003] transition-colors duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
          )}
          {contributor.portfolio && (
            <a
              href={contributor.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#aa0003] transition-colors duration-300 group"
            >
              <Globe className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
