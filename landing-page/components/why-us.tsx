export default function WhyUs() {
  const features = [
    {
      icon: "🤖",
      title: "Cutting-Edge Technology",
      description:
        "Learn and work with the latest robotics and automation technologies, preparing you for the future of innovation.",
    },
    {
      icon: "🎓",
      title: "Hands-On Learning",
      description:
        "Gain practical experience through workshops, projects, and competitions that enhance your technical skills.",
    },
    {
      icon: "🌐",
      title: "Global Network",
      description:
        "Connect with IEEE members worldwide and access resources from the largest technical professional organization.",
    },
    {
      icon: "🏆",
      title: "Competitions & Events",
      description:
        "Participate in national and international robotics competitions, hackathons, and technical seminars.",
    },
    {
      icon: "👥",
      title: "Collaborative Community",
      description: "Join a passionate community of innovators, engineers, and tech enthusiasts working together.",
    },
    {
      icon: "💡",
      title: "Innovation Hub",
      description: "Transform your ideas into reality with mentorship, resources, and support from industry experts.",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#aa0003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#aa0003]">RAS</span>?
          </h2>
          <div className="w-24 h-1 bg-[#aa0003] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the advantages of being part of the world's leading robotics and automation community
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#2a2a2a] p-8 rounded-xl border border-gray-800 hover:border-[#aa0003] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#aa0003]/20"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#aa0003] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
