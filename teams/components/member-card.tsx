"use client"

import { useState } from "react"
import type { TeamMember } from "../data/members-data"
import { Linkedin, User } from "lucide-react"
import Image from "next/image"

interface MemberCardProps {
  member: TeamMember
}

export default function MemberCard({ member }: MemberCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-[#aa0003] transition-all duration-300 hover:shadow-xl hover:shadow-[#aa0003]/20 hover:-translate-y-2">
      {/* Emoji Badge */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#aa0003] rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
        {member.emoji}
      </div>

      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 group-hover:border-[#aa0003] transition-colors duration-300 flex-shrink-0">
          {member.imageUrl && !imageError ? (
            <Image
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
              <User className="w-10 h-10 text-gray-500" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#aa0003] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{member.role}</p>
        </div>
      </div>

      {/* LinkedIn Button */}
      {member.linkedIn && (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#aa0003] text-white rounded-lg hover:bg-[#880002] transition-colors duration-300 text-sm font-medium"
        >
          <Linkedin className="w-4 h-4" />
          Connect
        </a>
      )}

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#aa0003]/0 to-[#aa0003]/0 group-hover:from-[#aa0003]/5 group-hover:to-[#aa0003]/10 rounded-xl transition-all duration-300 pointer-events-none" />
    </div>
  )
}
