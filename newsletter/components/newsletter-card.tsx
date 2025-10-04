"use client"

import Image from "next/image"
import { useState } from "react"
import type { Newsletter } from "../data/newsletter-data"
import { Download, Calendar } from "lucide-react"

interface NewsletterCardProps {
  newsletter: Newsletter
}

export default function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-gray-700 hover:border-[#aa0003] transition-all duration-300 group">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] bg-[#1a1a1a]">
        {!imageError ? (
          <Image
            src={newsletter.coverImage || "/placeholder.svg"}
            alt={newsletter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{newsletter.date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#aa0003] transition-colors duration-300">
          {newsletter.title}
        </h3>
        <p className="text-gray-300 mb-4">{newsletter.description}</p>
        <a
          href={newsletter.pdfUrl}
          download
          className="inline-flex items-center gap-2 bg-[#aa0003] text-white px-4 py-2 rounded-lg hover:bg-[#880002] transition-colors duration-300"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </a>
      </div>
    </div>
  )
}
