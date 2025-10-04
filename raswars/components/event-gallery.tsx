"use client"

import Image from "next/image"
import { useState } from "react"
import type { EventData } from "../data/event-data"

interface EventGalleryProps {
  data: EventData
}

export default function EventGallery({ data }: EventGalleryProps) {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})

  return (
    <section className="py-20 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden group bg-[#1a1a1a] border border-gray-700"
            >
              {!imageError[image] ? (
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${data.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={() => setImageError({ ...imageError, [image]: true })}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
