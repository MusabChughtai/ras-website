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

export const raswarsData: EventData = {
  title: "RASWARS",
  tagline: "The Ultimate Robotics Battle",
  description:
    "RASWARS is the flagship robotics competition where innovation meets competition. Teams from across the region compete in various robotics challenges, showcasing their technical prowess and creative problem-solving skills.",
  date: "Coming Soon",
  venue: "COMSATS University Islamabad, Lahore Campus",
  highlights: [
    "Line Following Robot Competition",
    "Robo Soccer Challenge",
    "Obstacle Course Navigation",
    "Innovation Showcase",
    "Networking Sessions",
    "Prize Pool Worth PKR 100,000+",
  ],
  gallery: [
    "/images/events/raswars-1.jpg",
    "/images/events/raswars-2.jpg",
    "/images/events/raswars-3.jpg",
    "/images/events/raswars-4.jpg",
  ],
  registrationOpen: false,
}
