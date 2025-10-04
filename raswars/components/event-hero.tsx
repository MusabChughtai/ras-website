import type { EventData } from "../data/event-data"

interface EventHeroProps {
  data: EventData
}

export default function EventHero({ data }: EventHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">{data.title}</h1>
          <p className="text-xl md:text-2xl text-[#aa0033] font-semibold">{data.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">{data.description}</p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 text-gray-300">
            <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium">{data.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{data.venue}</span>
          </div>
        </div>

        {/* CTA Button */}
        {data.registrationOpen ? (
          <button className="bg-[#aa0033] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#880002] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#aa0033]/50">
            Register Now
          </button>
        ) : (
          <div className="inline-block bg-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg">
            Registration Opening Soon
          </div>
        )}
      </div>
    </section>
  )
}
