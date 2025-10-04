"use client"

import type React from "react"
import { useState } from "react"

export default function Register() {


  return (
    <section id="register" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#aa0033_2px,transparent_2px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join <span className="text-[#aa0033]">RAS</span> Today
            </h2>
            <div className="w-24 h-1 bg-[#aa0033] mb-6" />

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Become part of the most innovative robotics and automation community at COMSATS University. Register now
              to unlock exclusive benefits and opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#aa0033]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Access to Workshops</h3>
                  <p className="text-gray-400">Participate in hands-on technical workshops and training sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#aa0033]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Competition Opportunities</h3>
                  <p className="text-gray-400">Compete in national and international robotics competitions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#aa0033]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Networking & Mentorship</h3>
                  <p className="text-gray-400">Connect with industry experts and like-minded peers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#aa0033]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#aa0033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">IEEE Membership Benefits</h3>
                  <p className="text-gray-400">Access IEEE resources, publications, and global network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Register Now Button Below Content */}
          <div className="w-full flex flex-col items-center mt-8">
            <a
              href="https://your-registration-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#aa0033] text-white font-semibold rounded-lg hover:bg-[#880002] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#aa0033]/50 text-center text-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
