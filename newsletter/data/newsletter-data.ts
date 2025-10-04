export interface Newsletter {
  id: string
  title: string
  date: string
  description: string
  pdfUrl: string
  coverImage: string
}

export const newslettersData: Newsletter[] = [
  {
    id: "1",
    title: "RAS Newsletter - January 2025",
    date: "January 2025",
    description: "Latest updates, events, and achievements from RAS CUI Lahore",
    pdfUrl: "/newsletters/january-2025.pdf",
    coverImage: "/images/newsletters/january-2025.jpg",
  },
  {
    id: "2",
    title: "RAS Newsletter - December 2024",
    date: "December 2024",
    description: "Year-end recap and upcoming plans for 2025",
    pdfUrl: "/newsletters/december-2024.pdf",
    coverImage: "/images/newsletters/december-2024.jpg",
  },
  {
    id: "3",
    title: "RAS Newsletter - November 2024",
    date: "November 2024",
    description: "Event highlights and member spotlights",
    pdfUrl: "/newsletters/november-2024.pdf",
    coverImage: "/images/newsletters/november-2024.jpg",
  },
]
