export interface Contributor {
  id: string
  name: string
  role: string
  description: string
  imageUrl: string
  linkedIn?: string
  github?: string
  portfolio?: string
}

export const contributorsData: Contributor[] = [
  {
    id: "1",
    name: "Musab Bin Zubair",
    role: "Lead Developer",
    description:
      "Musab Bin Zubair is the lead developer behind the RAS CUI Lahore website. With expertise in full-stack development and a passion for creating seamless user experiences, Musab has brought the vision of RAS to life through this platform.",
    imageUrl: "/images/contributors/musab-bin-zubair.jpg",
    linkedIn: "https://linkedin.com/in/musab-bin-zubair",
    github: "https://github.com/musab-bin-zubair",
    portfolio: "https://musabzubair.com",
  },
]
