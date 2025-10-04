"use client"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/ras-cover.jpg" alt="RAS Background" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#aa000320_1px,transparent_1px),linear-gradient(to_bottom,#aa000320_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-[#aa0003]/20 border border-[#aa0003] rounded-full">
              <span className="text-[#aa0003] font-semibold text-sm uppercase tracking-wider">
                Welcome to a New Dimension
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hello <span className="text-[#aa0003]">Humanoids</span>.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Chapter of the IEEE Student Branch, COMSATS University Islamabad, Lahore Campus. Leading the way towards a
              Technological Tomorrow. Where learning and using the Robotics and Automation is the new normal.
            </p>

            <p className="text-xl text-[#aa0003] font-semibold mb-6">#WETHERAS</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#register"
                className="px-8 py-4 bg-[#aa0003] text-white font-semibold rounded-lg hover:bg-[#880002] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#aa0003]/50"
              >
                Join Us Now
              </Link>
              <Link
                href="#events"
                className="px-8 py-4 bg-transparent border-2 border-[#aa0003] text-[#aa0003] font-semibold rounded-lg hover:bg-[#aa0003] hover:text-white transition-all duration-300"
              >
                Explore Events
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/rascuilhr/"
                className="w-10 h-10 rounded-full border-2 border-[#aa0003] text-[#aa0003] flex items-center justify-center hover:bg-[#aa0003] hover:text-white transition-all duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/rascui/"
                className="w-10 h-10 rounded-full border-2 border-[#aa0003] text-[#aa0003] flex items-center justify-center hover:bg-[#aa0003] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ras.cui/"
                className="w-10 h-10 rounded-full border-2 border-[#aa0003] text-[#aa0003] flex items-center justify-center hover:bg-[#aa0003] hover:text-white transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Mascot Modernized */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
              {/* Glassmorphism/Glow Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#aa0003]/40 to-[#1a1a1a]/60 blur-2xl opacity-80 shadow-2xl" />
              <div className="absolute inset-6 rounded-full bg-white/10 backdrop-blur-md border border-[#aa0003]/30 shadow-lg" />

              {/* Mascot Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex items-center justify-center z-10">
                <Image
                  src="/images/ieee-mascot.webp"
                  alt="RAS Mascot"
                  fill
                  className="object-contain drop-shadow-[0_8px_32px_rgba(170,0,3,0.25)] animate-float"
                  priority
                />
              </div>

              {/* Rotating Text Modernized */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                  </defs>
                  <text className="text-base font-bold" fill="#aa0003" letterSpacing="2">
                    <textPath href="#circlePath">RAS • ROBOTICS & AUTOMATION• IEEE • CUI LAHORE • </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          type="button"
          className="flex flex-col items-center gap-2 animate-bounce focus:outline-none"
          aria-label="Scroll Down"
          onClick={() => {
            window.scrollBy({ top: 600, left: 0, behavior: 'smooth' })
          }}
        >
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <svg className="w-6 h-6 text-[#aa0003]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
