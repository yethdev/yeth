import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import './Home.css'

const heading = "Hey, I'm yeth."

export default function Home() {
  const ref = useRef(null)
  const [typed, setTyped] = useState(0)

  useEffect(() => { ref.current?.classList.add('page-visible') }, [])

  useEffect(() => {
    const delay = setTimeout(() => {
      const id = setInterval(() => {
        setTyped(prev => {
          if (prev >= heading.length) { clearInterval(id); return prev }
          return prev + 1
        })
      }, 100)
      return () => clearInterval(id)
    }, 300)
    return () => clearTimeout(delay)
  }, [])

  return (
    <div className="page page-enter" ref={ref}>
      <section className="hero">
        <h1 className="hero-title">
          {heading.slice(0, Math.min(typed, 9))}
          {typed > 9 && <span className="accent">{heading.slice(9, typed)}</span>}
        </h1>
        <p className="hero-tagline">wannabe full stack web/cybersecurity developer</p>

        <p className="hero-subtitle">
          I like breaking things and fixing them. Really into{' '}
          cybersecurity, networking,
          and recently AI/ML. Self-taught and always working on a project
        </p>

        <div className="hero-cta">
          <Link to="/projects" className="btn btn-primary">
            Check out my projects <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn btn-ghost">About me</Link>
        </div>
      </section>

      <section>
        <h2>What I'm into</h2>
        <ul className="interests">
          <li><strong>Cybersecurity</strong>: CTFs, pentesting, etc. I do hackthebox sometimes</li>
          <li><strong>Networking</strong>: homelabs, packets, protocols, etc. have an OPNSense box thats really good</li>
          <li><strong>AI</strong>: trying to implement AI into security stuff like anomoly detection and log review, still working out how to make AI not destroy everything</li>
        </ul>
      </section>

      <section className="recent-section">
        <div className="section-header">
          <h2>Recent projects</h2>
          <Link to="/projects" className="see-all">See all <ChevronRight size={16} /></Link>
        </div>
        <p>coming up with new ideas</p>
      </section>
    </div>
  )
}
