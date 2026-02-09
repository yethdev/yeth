import './Card.css'

export default function Card({ children, className = '', href }) {
  if (href) return (
    <a className={`card ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
  return <div className={`card ${className}`}>{children}</div>
}
