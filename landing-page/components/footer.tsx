import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/images/ieee-mascot.webp" alt="IEEE RAS Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">RAS</span>
                <span className="text-[#aa0033] text-sm font-medium">CUI Lahore</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
              Robotics & Automation Society - Student Chapter at COMSATS University Islamabad, Lahore Campus. Leading
              the way towards a technological tomorrow.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/rascuilhr/"
                className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center hover:border-[#aa0033] hover:text-[#aa0033] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/rascui/"
                className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center hover:border-[#aa0033] hover:text-[#aa0033] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ras.cui/"
                className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center hover:border-[#aa0033] hover:text-[#aa0033] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "RASWARS", href: "/raswars" },
                { label: "RAS FIESTA", href: "/ras-fiesta" },
                { label: "Teams", href: "/teams" },
                { label: "Groups", href: "/groups" },
                { label: "Newsletter", href: "/newsletter" },
                { label: "Sponsors", href: "/sponsors" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#aa0033] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-[#aa0033] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>COMSATS University, Lahore Campus</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-[#aa0033] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>ieeerascui@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-[#aa0033] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 300 1234567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center">
            © 2018 RAS CUI Lahore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
