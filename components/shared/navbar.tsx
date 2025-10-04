"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  const navLinks = isHomePage
    ? [
        { href: "/", label: "Home" },
        // { href: "#why-us", label: "Why Us" },
        // { href: "#events", label: "Events" },
        { href: "/raswars", label: "RASWARS" },
        { href: "/ras-fiesta", label: "RAS FIESTA" },
        { href: "/teams", label: "Team" },
        { href: "/groups", label: "Groups" },
        { href: "/newsletter", label: "Newsletter" },
        { href: "/sponsors", label: "Sponsors" },
        { href: "/contributors", label: "Contributors" },
        { href: "/#register", label: "Register Now" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/raswars", label: "RASWARS" },
        { href: "/ras-fiesta", label: "RAS FIESTA" },
        { href: "/teams", label: "Teams" },
        { href: "/groups", label: "Groups" },
        { href: "/newsletter", label: "Newsletter" },
        { href: "/sponsors", label: "Sponsors" },
        { href: "/contributors", label: "Contributors" },
        { href: "/#register", label: "Register Now" },
      ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/ieee-mascot.webp"
                alt="RAS Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl">RAS</span>
              <span className="text-[#aa0003] text-xs md:text-sm font-medium">CUI Lahore</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 font-medium text-sm ${
                  pathname === link.href ||
                  (link.href === "/groups" && pathname.startsWith("/groups")) ||
                  (link.href === "/teams" && pathname.startsWith("/teams")) ||
                  (link.href === "/raswars" && pathname.startsWith("/raswars")) ||
                  (link.href === "/ras-fiesta" && pathname.startsWith("/ras-fiesta")) ||
                  (link.href === "/newsletter" && pathname.startsWith("/newsletter")) ||
                  (link.href === "/sponsors" && pathname.startsWith("/sponsors")) ||
                  (link.href === "/contributors" && pathname.startsWith("/contributors"))
                    ? "text-[#aa0003]"
                    : "text-gray-300 hover:text-[#aa0003]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#2a2a2a] rounded-lg mt-2 mb-4 overflow-hidden max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 transition-colors duration-300 ${
                  pathname === link.href ||
                  (link.href === "/groups" && pathname.startsWith("/groups")) ||
                  (link.href === "/teams" && pathname.startsWith("/teams")) ||
                  (link.href === "/raswars" && pathname.startsWith("/raswars")) ||
                  (link.href === "/ras-fiesta" && pathname.startsWith("/ras-fiesta")) ||
                  (link.href === "/newsletter" && pathname.startsWith("/newsletter")) ||
                  (link.href === "/sponsors" && pathname.startsWith("/sponsors")) ||
                  (link.href === "/contributors" && pathname.startsWith("/contributors"))
                    ? "bg-[#aa0003] text-white"
                    : "text-gray-300 hover:bg-[#aa0003] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
