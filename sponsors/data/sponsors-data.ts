export interface Sponsor {
  id: string
  name: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  logo: string
  website: string
  description: string
}

export const sponsorsData: Sponsor[] = [
  {
    id: "1",
    name: "Platinum Sponsor",
    tier: "platinum",
    logo: "/images/sponsors/placeholder-platinum.png",
    website: "https://example.com",
    description: "Our premier platinum sponsor supporting innovation in robotics",
  },
  {
    id: "2",
    name: "Gold Sponsor",
    tier: "gold",
    logo: "/images/sponsors/placeholder-gold.png",
    website: "https://example.com",
    description: "Gold tier sponsor empowering the next generation of engineers",
  },
  {
    id: "3",
    name: "Silver Sponsor",
    tier: "silver",
    logo: "/images/sponsors/placeholder-silver.png",
    website: "https://example.com",
    description: "Silver tier sponsor supporting our technical initiatives",
  },
  {
    id: "4",
    name: "Bronze Sponsor",
    tier: "bronze",
    logo: "/images/sponsors/placeholder-bronze.png",
    website: "https://example.com",
    description: "Bronze tier sponsor helping us grow and succeed",
  },
]
