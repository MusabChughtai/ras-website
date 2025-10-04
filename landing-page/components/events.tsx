import Image from "next/image"

export default function Events() {
  const events = [
    {
      title: "Robotics Workshop Series",
      date: "Monthly",
      type: "Workshop",
      description: "Hands-on workshops covering Arduino, Raspberry Pi, ROS, and advanced robotics concepts.",
      image: "/robotics-workshop-arduino.jpg",
    },
    {
      title: "AI & Machine Learning Seminars",
      date: "Quarterly",
      type: "Seminar",
      description: "Expert talks on artificial intelligence, machine learning, and their applications in robotics.",
      image: "/artificial-intelligence-seminar.jpg",
    },
    {
      title: "RoboWars Competition",
      date: "Annual",
      type: "Competition",
      description: "Battle of the bots! Design, build, and compete with your custom fighting robots.",
      image: "/robot-battle-competition.jpg",
    },
    {
      title: "Line Following Challenge",
      date: "Bi-Annual",
      type: "Competition",
      description: "Test your autonomous robot's ability to navigate complex tracks using sensors and algorithms.",
      image: "/line-following-robot.png",
    },
    {
      title: "Industry Expert Sessions",
      date: "Monthly",
      type: "Seminar",
      description: "Learn from industry professionals about real-world applications and career opportunities.",
      image: "/technology-industry-expert-presentation.jpg",
    },
    {
      title: "Hackathon 2025",
      date: "Coming Soon",
      type: "Hackathon",
      description: "24-hour coding marathon to solve real-world problems using robotics and automation.",
      image: "/hackathon-coding-event.jpg",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-blue-600"
      case "Seminar":
        return "bg-green-600"
      case "Competition":
        return "bg-[#aa0003]"
      case "Hackathon":
        return "bg-purple-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Events & <span className="text-[#aa0003]">Seminars</span>
          </h2>
          <div className="w-24 h-1 bg-[#aa0003] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our exciting lineup of workshops, competitions, and learning opportunities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#aa0003] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#aa0003]/20"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] to-transparent" />

                {/* Event Type Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`${getTypeColor(event.type)} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-[#aa0003]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[#aa0003] text-sm font-semibold">{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#aa0003] transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{event.description}</p>

                <button className="text-[#aa0003] font-semibold text-sm hover:underline flex items-center gap-2 group/btn">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-[#aa0003] text-[#aa0003] font-semibold rounded-lg hover:bg-[#aa0003] hover:text-white transition-all duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
