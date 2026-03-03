import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CursorTrail from './components/CursorTrail'
import MusicPlayer from './components/MusicPlayer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <CursorTrail />
      <MusicPlayer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
