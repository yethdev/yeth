import { useEffect, useRef } from 'react'
import Tag from '../components/Tag'
import './About.css'

const _d = (s) => atob(s)
const SKILLS = {
  'Security': ['Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'OWASP', 'Ghidra'],
  'Languages': ['Python', 'HTML', 'JavaScript', 'CSS', 'Rust (learning)'],
  'Infrastructure': ['Linux', 'Docker', 'AWS', 'Terraform', 'Proxmox', _d('U2NyYW1qZXQ=')],
  'Other': ['Git', 'React', 'Node.js'],
}

const TIMELINE = [
  {
    period: '2026',
    title: 'Used AI to code too much',
    desc: 'Used AI so much I half-forgot how to code. It builds the entire platform, it doesnt work, then i fix everything and make it look good',
  },
  {
    period: '2025',
    title: 'Started working with AI',
    desc: 'Started using AI tools for coding and started training ML for security stuff. Built some cool stuff but accidentally stopped coding',
  },
  {
    period: '2024',
    title: 'Homelab and networking',
    desc: 'I set up OPNSense, a raspberry pi, etc and played with it. it was fun, still think cybersecurity is better',
  },
  {
    period: '2023',
    title: 'Started cybersecurity',
    desc: 'Started making web stuff and learning how to break things. Decided this is what I should do.',
  },
  {
    period: '2022',
    title: 'Started coding',
    desc: 'I learned python first, then JS, HTML, and CSS. Started off with a lot of terrible wrappers',
  },
  {
    period: '2021',
    title: 'Built my first computer',
    desc: 'Built a PC for Roblox with my dad, took forever to get it to boot, but it worked eventually',
  },
]

export default function About() {
  const el = useRef(null)
  useEffect(() => { el.current?.classList.add('page-visible') }, [])

  return (
    <div className="page page-enter" ref={el}>
      <section className="about-hero">
        <h1>About me</h1>
        <div className="about-intro">
          <p>
            Hey! I'm yeth, a self-taught developer who's into web and cybersecurity stuff.
            I build tools specifically designed to see the limits of software,
            and how far one specific tool can take me.
          </p>
          <p>
            I love breaking and fixing things. I've added a lot of stuff to my
            homelab so i can host a lot if there's not a power outage.
            I do bug bounties sometimes, and I'm always working on 4 barely started projects
            at once, mostly security or converting something into an api.
          </p>
          <p>
            When I'm not coding, I'm playing basketball. Trying to get better at Rust
            right now and it's really, really hard.
          </p>
        </div>
      </section>

      <section>
        <h2>Skills & tools</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <div className="tags">
                {items.map(skill => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>How I got here</h2>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period mono">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <h2>Get in touch</h2>
        <p>
          always down to work on cool projects, especially anything security related.
          feel free to reach out.
        </p>
        <div className="contact-buttons">
          <a href="mailto:hello@yeth.dev" className="btn btn-primary">
            hello@yeth.dev
          </a>
          <a href="https://discord.com/users/968485773735251978" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            @yethdev on Discord
          </a>
        </div>
      </section>
    </div>
  )
}
