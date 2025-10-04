export interface TeamMember {
  id: string
  name: string
  role: string
  emoji: string
  category: "executive" | "chief"
  linkedIn?: string
  imageUrl?: string // Added imageUrl field for profile pictures
}

export const executives: TeamMember[] = [
  {
    id: "zoha-waheed",
    name: "Zoha Waheed",
    role: "Overlord (Chairperson)",
    emoji: "👑",
    category: "executive",
    linkedIn: "https://linkedin.com/in/zoha-waheed",
    imageUrl: "/images/team/zoha-waheed.jpg", // Added image path
  },
  {
    id: "sulaiman-butt",
    name: "Sulaiman Butt",
    role: "Vice-Lord (Vice Chairperson)",
    emoji: "🎩",
    category: "executive",
    linkedIn: "https://linkedin.com/in/sulaiman-butt",
    imageUrl: "/images/team/sulaiman-butt.jpg",
  },
  {
    id: "manal-zahra",
    name: "Manal Zahra",
    role: "Wealth Warden (Treasurer)",
    emoji: "🪙",
    category: "executive",
    linkedIn: "https://linkedin.com/in/manal-zahra",
    imageUrl: "/images/team/manal-zahra.jpg",
  },
  {
    id: "eiman-fatima",
    name: "Eiman Fatima",
    role: "Chief Strategist (General Secretary)",
    emoji: "👾",
    category: "executive",
    linkedIn: "https://linkedin.com/in/eiman-fatima",
    imageUrl: "/images/team/eiman-fatima.jpg",
  },
  {
    id: "ghulam-hafeez",
    name: "Ghulam Hafeez",
    role: "Co-Strategist",
    emoji: "🌩",
    category: "executive",
    linkedIn: "https://linkedin.com/in/ghulam-hafeez",
    imageUrl: "/images/team/ghulam-hafeez.jpg",
  },
  {
    id: "abdul-rahman",
    name: "Abdul Rahman",
    role: "Co-Strategist",
    emoji: "🌩",
    category: "executive",
    linkedIn: "https://linkedin.com/in/abdul-rahman",
    imageUrl: "/images/team/abdul-rahman.jpg",
  },
  {
    id: "danyal-mustafa",
    name: "Danyal Mustafa",
    role: "Discipline Warden",
    emoji: "🚔",
    category: "executive",
    linkedIn: "https://linkedin.com/in/danyal-mustafa",
    imageUrl: "/images/team/danyal-mustafa.jpg",
  },
]

export const chiefs: TeamMember[] = [
  {
    id: "musaab",
    name: "Musaab",
    role: "Tech Ninjas • RAS",
    emoji: "🥷",
    category: "chief",
    linkedIn: "https://linkedin.com/in/musaab",
    imageUrl: "/images/team/musaab.jpg",
  },
  {
    id: "maryam-mohsin",
    name: "Maryam Mohsin",
    role: "Design Dynamos • RAS",
    emoji: "🎨",
    category: "chief",
    linkedIn: "https://linkedin.com/in/maryam-mohsin",
    imageUrl: "/images/team/maryam-mohsin.jpg",
  },
  {
    id: "mayra",
    name: "Mayra",
    role: "Marketing Mechs • RAS",
    emoji: "🧠",
    category: "chief",
    linkedIn: "https://linkedin.com/in/mayra",
    imageUrl: "/images/team/mayra.jpg",
  },
  {
    id: "shahmeer",
    name: "Shahmeer",
    role: "Event Elites • RAS",
    emoji: "🎪",
    category: "chief",
    linkedIn: "https://linkedin.com/in/shahmeer",
    imageUrl: "/images/team/shahmeer.jpg",
  },
  {
    id: "zainab",
    name: "Zainab",
    role: "Social Storms • RAS",
    emoji: "⚡",
    category: "chief",
    linkedIn: "https://linkedin.com/in/zainab",
    imageUrl: "/images/team/zainab.jpg",
  },
  {
    id: "sharjeel",
    name: "Sharjeel",
    role: "Public Pioneers • RAS",
    emoji: "📣",
    category: "chief",
    linkedIn: "https://linkedin.com/in/sharjeel",
    imageUrl: "/images/team/sharjeel.jpg",
  },
  {
    id: "laiba-amir",
    name: "Laiba Amir",
    role: "Generative Genzs • RAS",
    emoji: "🎩",
    category: "chief",
    linkedIn: "https://linkedin.com/in/laiba-amir",
    imageUrl: "/images/team/laiba-amir.jpg",
  },
  {
    id: "matti",
    name: "Matti",
    role: "Cinematic Cyborgs • RAS",
    emoji: "🎥",
    category: "chief",
    linkedIn: "https://linkedin.com/in/matti",
    imageUrl: "/images/team/matti.jpg",
  },
  {
    id: "khizar",
    name: "Khizar",
    role: "Data Architects • RAS",
    emoji: "🔎",
    category: "chief",
    linkedIn: "https://linkedin.com/in/khizar",
    imageUrl: "/images/team/khizar.jpg",
  },
  {
    id: "minahil",
    name: "Minahil",
    role: "Robo Sapiens • RAS",
    emoji: "🤖",
    category: "chief",
    linkedIn: "https://linkedin.com/in/minahil",
    imageUrl: "/images/team/minahil.jpg",
  },
]

export const allMembers = [...executives, ...chiefs]
