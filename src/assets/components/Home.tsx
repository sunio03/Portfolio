import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Full Stack Developer',
    'Software Engineer', 
    'React Developer',
    'TypeScript Enthusiast'
  ]

  // Auto-rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#0b192e] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[rgb(100,255,218)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-[rgb(100,255,218)] text-lg sm:text-xl font-medium tracking-wide">
              Hi there, I'm
            </p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Asuni Tarmizi
            </h1>
            
            {/* Animated role */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 transition-all duration-500">
                <span className="text-[rgb(100,255,218)]">I'm a </span>
                <span className="inline-block min-w-[300px] text-left">
                  {roles[currentRole]}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and user-centered design. Let's build something amazing together.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-[rgb(100,255,218)] text-[#0b192e] font-semibold text-lg rounded-lg
                       hover:bg-[rgb(120,255,238)] transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-[rgb(100,255,218)]/25"
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                →
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border-2 border-[rgb(100,255,218)] text-[rgb(100,255,218)] font-semibold text-lg rounded-lg
                       hover:bg-[rgb(100,255,218)] hover:text-[#0b192e] transition-all duration-300
                       transform hover:scale-105"
            >
              About Me
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/sunio03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[rgb(100,255,218)] transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[rgb(100,255,218)] transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 hover:text-[rgb(100,255,218)] transition-colors duration-300"
            >
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-[rgb(100,255,218)] transition-colors duration-300"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}