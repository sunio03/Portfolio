import { useState } from 'react'

export default function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "Next.js", level: 80, icon: "▲" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Express.js", level: 82, icon: "🚂" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "REST APIs", level: 88, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Figma", level: 75, icon: "🎯" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Linux", level: 72, icon: "🐧" }
      ]
    }
  ]

  const interests = [
    { icon: "🎮", title: "Gaming", description: "Strategy and RPG games" },
    { icon: "📚", title: "Learning", description: "Always exploring new tech" },
    { icon: "🏃‍♂️", title: "Fitness", description: "Running and gym workouts" },
    { icon: "📸", title: "Photography", description: "Capturing beautiful moments" },
    { icon: "🎵", title: "Music", description: "Electronic and indie rock" },
    { icon: "☕", title: "Coffee", description: "Fuel for coding sessions" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-10 w-64 h-64 bg-[rgb(100,255,218)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About <span className="text-[rgb(100,255,218)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(100,255,218)] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Photo and intro */}
          <div className="space-y-8">
            {/* Profile photo placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[rgb(100,255,218)] to-blue-500 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[rgb(100,255,218)] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Personal info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-[rgb(100,255,218)] font-semibold mb-1">Location</h4>
                <p className="text-gray-300">Cukai, Terengganu</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-[rgb(100,255,218)] font-semibold mb-1">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-[rgb(100,255,218)] font-semibold mb-1">Focus</h4>
                <p className="text-gray-300">Full Stack</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-[rgb(100,255,218)] font-semibold mb-1">Status</h4>
                <p className="text-gray-300">Available</p>
              </div>
            </div>
          </div>

          {/* Right side - Description and details */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hello! I'm <span className="text-[rgb(100,255,218)] font-semibold">Asuni Tarmizi</span>, 
                a passionate full-stack developer based in Terengganu, Malaysia. I love creating digital 
                experiences that are not only functional but also beautiful and user-friendly.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in web development started during my college years, and since then, I've been 
                constantly learning and adapting to new technologies. I enjoy solving complex problems 
                and turning ideas into reality through clean, efficient code.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying some downtime with gaming and photography. I believe in continuous 
                learning and always strive to improve my craft.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(100,255,218)] mb-1">15+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(100,255,218)] mb-1">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(100,255,218)] mb-1">100%</div>
                <div className="text-gray-400 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Skills & <span className="text-[rgb(100,255,218)]">Technologies</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category} className="space-y-4">
                <h4 className="text-xl font-semibold text-[rgb(100,255,218)] mb-6 text-center">
                  {skillGroup.category}
                </h4>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setActiveSkill(`${groupIndex}-${index}`)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[rgb(100,255,218)] text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[rgb(100,255,218)] to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: activeSkill === `${groupIndex}-${index}` || activeSkill === null 
                              ? `${skill.level}%` 
                              : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests section */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Beyond <span className="text-[rgb(100,255,218)]">Coding</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group bg-gray-800/30 rounded-xl p-6 text-center hover:bg-gray-800/50 
                         transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-[rgb(100,255,218)]/30"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[rgb(100,255,218)]/10 to-blue-500/10 rounded-2xl p-8 border border-[rgb(100,255,218)]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Work Together!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <button className="bg-[rgb(100,255,218)] text-[#0b192e] px-8 py-3 rounded-lg font-semibold 
                             hover:bg-[rgb(120,255,238)] transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}