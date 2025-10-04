import type { EventData } from "../data/event-data"

interface EventHighlightsProps {
  data: EventData
}

export default function EventHighlights({ data }: EventHighlightsProps) {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Event Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-lg border border-gray-700 hover:border-[#aa0033] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#aa0033]/10 rounded-lg flex items-center justify-center group-hover:bg-[#aa0033]/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg font-medium flex-1">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
