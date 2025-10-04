export interface EventData {
  title: string
  tagline: string
  description: string
  date: string
  venue: string
  highlights: string[]
  gallery: string[]
  registrationOpen: boolean
}

export const rasFiestaData: EventData = {
  title: "RAS FIESTA",
  tagline: "Celebrate Innovation & Technology",
  description:
    "RAS FIESTA is an annual celebration of technology, innovation, and creativity. Join us for workshops, tech talks, competitions, and networking opportunities with industry professionals and fellow tech enthusiasts.",
  date: "Coming Soon",
  venue: "COMSATS University Islamabad, Lahore Campus",
  highlights: [
    "Technical Workshops",
    "Guest Speaker Sessions",
    "Project Exhibitions",
    "Gaming Tournaments",
    "Food & Entertainment",
    "Networking Opportunities",
  ],
  gallery: [
    "/images/events/fiesta-1.jpg",
    "/images/events/fiesta-2.jpg",
    "/images/events/fiesta-3.jpg",
    "/images/events/fiesta-4.jpg",
  ],
  registrationOpen: false,
}
