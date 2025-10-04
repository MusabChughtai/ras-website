import type { TeamMember } from "../data/members-data"
import MemberCard from "./member-card"

interface MembersSectionProps {
  title: string
  subtitle: string
  members: TeamMember[]
}

export default function MembersSection({ title, subtitle, members }: MembersSectionProps) {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-400 text-lg">{subtitle}</p>
        <div className="w-24 h-1 bg-[#aa0003] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
