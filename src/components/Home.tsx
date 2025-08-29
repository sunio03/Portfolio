import { useState, useEffect } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "TypeScript Enthusiast",
  ]

  // Auto-rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b192e] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[rgb(100,255,218)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-[rgb(100,255,218)] text-lg sm:text-xl font-medium tracking-wide">
            Hi there, I'm
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Asuni Tarmizi
          </h1>

          {/* Role */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 transition-all duration-500">
              <span className="text-[rgb(100,255,218)]">I'm a </span>
              <span className="inline-block min-w-[300px] text-left">
                {roles[currentRole]}
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed mt-8"
        >
          Passionate about creating exceptional digital experiences through
          clean code, innovative solutions, and user-centered design. Let's
          build something amazing together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-[rgb(100,255,218)] text-[#0b192e] font-semibold text-lg rounded-lg
                     hover:bg-[rgb(120,255,238)] transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-[rgb(100,255,218)]/25"
          >
            View My Work →
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 border-2 border-[rgb(100,255,218)] text-[rgb(100,255,218)] font-semibold text-lg rounded-lg
                     hover:bg-[rgb(100,255,218)] hover:text-[#0b192e] transition-all duration-300
                     transform hover:scale-105"
          >
            About Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 pt-8"
        >
          {/* Your GitHub, LinkedIn, Email here */}
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-[rgb(100,255,218)] transition-colors duration-300"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
