import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  )
}
