"use client"

import { useEffect, useState, useRef } from "react"

export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Active Members", icon: "👥" },
    { value: 50, suffix: "+", label: "Events Organized", icon: "🎯" },
    { value: 20, suffix: "+", label: "Workshops Conducted", icon: "🛠️" },
    { value: 15, suffix: "+", label: "Competitions Won", icon: "🏆" },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          stats.forEach((stat, index) => {
            const duration = 2000
            const steps = 60
            const increment = stat.value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, duration / steps)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#aa0033_25%,transparent_25%,transparent_75%,#aa0033_75%,#aa0033),linear-gradient(45deg,#aa0033_25%,transparent_25%,transparent_75%,#aa0033_75%,#aa0033)] bg-[size:2rem_2rem] bg-[position:0_0,1rem_1rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#aa0033]">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-[#aa0033] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and innovation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-8 rounded-xl border border-gray-800 hover:border-[#aa0033] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#aa0033]/20 text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>

              {/* Counter */}
              <div className="text-4xl sm:text-5xl font-bold text-[#aa0033] mb-2">
                {counters[index]}
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>

              {/* Animated Bar */}
              <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#aa0033] transition-all duration-2000 ease-out"
                  style={{
                    width: hasAnimated ? "100%" : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Established</h3>
            <p className="text-[#aa0033] text-2xl font-bold">2018</p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-white mb-2">University</h3>
            <p className="text-[#aa0033] text-lg font-bold">COMSATS Lahore</p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Affiliation</h3>
            <p className="text-[#aa0033] text-2xl font-bold">IEEE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
