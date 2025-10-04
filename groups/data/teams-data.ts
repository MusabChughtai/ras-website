export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  linkedin?: string
  github?: string
}

export interface Team {
  id: string
  name: string
  description: string
  icon: string
  color: string
  mission: string
  responsibilities: string[]
  members: TeamMember[]
}

export const teamsData: Team[] = [
  {
    id: "tech-ninjas",
    name: "Tech Ninjas",
    description: "Masters of code and innovation, building the future one line at a time.",
    icon: "💻",
    color: "#aa0033",
    mission: "To develop cutting-edge technical solutions and maintain the society's digital infrastructure.",
    responsibilities: [
      "Website development and maintenance",
      "Mobile app development",
      "Technical workshop organization",
      "Code review and quality assurance",
      "Integration of new technologies",
    ],
    members: [],
  },
  {
    id: "design-dynamos",
    name: "Design Dynamos",
    description: "Creative minds crafting stunning visuals and user experiences.",
    icon: "🎨",
    color: "#e74c3c",
    mission: "To create visually appealing and user-friendly designs that represent RAS's brand identity.",
    responsibilities: [
      "UI/UX design for digital platforms",
      "Graphic design for events and promotions",
      "Brand identity management",
      "Social media visual content",
      "Print media design",
    ],
    members: [],
  },
  {
    id: "robo-sapiens",
    name: "Robo Sapiens",
    description: "Robotics enthusiasts pushing the boundaries of automation and AI.",
    icon: "🤖",
    color: "#3498db",
    mission: "To lead robotics projects and competitions, advancing automation and AI technologies.",
    responsibilities: [
      "Robot design and development",
      "Competition preparation and participation",
      "Robotics workshops and training",
      "Research in automation technologies",
      "Hardware-software integration",
    ],
    members: [],
  },
  {
    id: "event-elites",
    name: "Event Elites",
    description: "Expert organizers creating memorable experiences and seamless events.",
    icon: "🎯",
    color: "#9b59b6",
    mission: "To plan, organize, and execute successful events that engage and inspire the community.",
    responsibilities: [
      "Event planning and coordination",
      "Venue management and logistics",
      "Speaker and guest coordination",
      "Event timeline management",
      "Post-event analysis and reporting",
    ],
    members: [],
  },
  {
    id: "public-pioneers",
    name: "Public Pioneers",
    description: "Communication experts building bridges between RAS and the community.",
    icon: "📢",
    color: "#f39c12",
    mission: "To manage public relations and foster strong relationships with stakeholders and partners.",
    responsibilities: [
      "Public relations management",
      "Partnership development",
      "Community outreach programs",
      "Press releases and media coverage",
      "Stakeholder communication",
    ],
    members: [],
  },
  {
    id: "marketing-mechs",
    name: "Marketing Mechs",
    description: "Strategic marketers amplifying RAS's reach and impact.",
    icon: "📈",
    color: "#1abc9c",
    mission: "To develop and execute marketing strategies that increase RAS's visibility and engagement.",
    responsibilities: [
      "Marketing campaign development",
      "Brand promotion strategies",
      "Market research and analysis",
      "Sponsorship acquisition",
      "Promotional material creation",
    ],
    members: [],
  },
  {
    id: "social-storms",
    name: "Social Storms",
    description: "Social media wizards creating viral content and engaging communities.",
    icon: "⚡",
    color: "#e67e22",
    mission: "To manage social media presence and create engaging content that resonates with our audience.",
    responsibilities: [
      "Social media content creation",
      "Community management",
      "Engagement analytics and reporting",
      "Trend monitoring and adaptation",
      "Influencer collaboration",
    ],
    members: [],
  },
  {
    id: "generative-genz",
    name: "Generative GenZ",
    description: "AI pioneers exploring the frontiers of generative technologies.",
    icon: "🧠",
    color: "#16a085",
    mission: "To explore and implement generative AI technologies in innovative projects and applications.",
    responsibilities: [
      "AI model development and training",
      "Generative AI project implementation",
      "AI workshop organization",
      "Research in machine learning",
      "AI ethics and best practices",
    ],
    members: [],
  },
  {
    id: "data-architects",
    name: "Data Architects",
    description: "Data scientists transforming information into actionable insights.",
    icon: "📊",
    color: "#2980b9",
    mission: "To analyze data, create insights, and build data-driven solutions for informed decision-making.",
    responsibilities: [
      "Data collection and analysis",
      "Database design and management",
      "Data visualization and reporting",
      "Predictive modeling",
      "Data security and privacy",
    ],
    members: [],
  },
  {
    id: "cinematic-cyborgs",
    name: "Cinematic Cyborgs",
    description: "Visual storytellers capturing moments and creating compelling narratives.",
    icon: "🎬",
    color: "#c0392b",
    mission: "To document events through photography and videography, creating compelling visual stories.",
    responsibilities: [
      "Event photography and videography",
      "Video editing and production",
      "Documentary creation",
      "Live streaming management",
      "Visual content archiving",
    ],
    members: [],
  },
]

export function getTeamById(id: string): Team | undefined {
  return teamsData.find((team) => team.id === id)
}

export function getAllTeams(): Team[] {
  return teamsData
}
