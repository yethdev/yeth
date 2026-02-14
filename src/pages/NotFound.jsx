import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  const pageRef = useRef(null)
  useEffect(() => { if (pageRef.current) pageRef.current.classList.add('page-visible') }, [])

  return (
    <div className="not-found page page-enter" ref={pageRef}>
      <h1>404</h1>
      <p>there isn't a page here, i dont know what you were expecting but probably not this</p>
      <Link to="/" className="btn btn-primary">go home</Link>
    </div>
  )
}
