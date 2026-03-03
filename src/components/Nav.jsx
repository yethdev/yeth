import { Terminal } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo">
          <Terminal size={20} />
          yeth.dev
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <a href="https://github.com/yethdev" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  )
}
