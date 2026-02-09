import { Github, Mail, MessageCircle, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} yeth.dev
        </p>
        <div className="footer-links">
          <a href="https://github.com/yethdev" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
          <a href="https://discord.com/users/yethdev" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} />
          </a>
          <a href="mailto:hello@yeth.dev">
            <Mail size={18} />
          </a>
          <Link to="/donate">
            <DollarSign size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
