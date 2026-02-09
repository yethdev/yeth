import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  const pageRef = useRef(null)
  useEffect(() => { if (pageRef.current) pageRef.current.classList.add('page-visible') }, [])

  return (
    <div className="not-found page page-enter" ref={pageRef}>
      <h1>404</h1>
      <p>this page doesn't exist. you sure you typed that right?</p>
      <Link to="/" className="btn btn-primary">go home</Link>
    </div>
  )
}
