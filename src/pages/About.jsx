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
    desc: 'Used AI so much I genuinely don\'t know how to code without it. I still know stuff but I can\'t make anything full stack anymore, which im honestly fine with',
  },
  {
    period: '2025',
    title: 'Started working with AI',
    desc: 'Started using AI tools for coding and started experimenting with ML for security stuff. Built some cool things honestly but also accidentally stopped coding',
  },
  {
    period: '2024',
    title: 'Homelab and networking',
    desc: 'Set up a homelab. Proxmox, VLAN, OPNSense, the works. Broke everything for a month, that pmo',
  },
  {
    period: '2023',
    title: 'Got into cybersecurity',
    desc: 'Started doing CTFs and fell in love with security. HackTheBox, TryHackMe, all of it. Got me into cybersecurity',
  },
  {
    period: '2022',
    title: 'Started coding',
    desc: 'Python first, then html, then js and css. Picked up Linux around the same time and yet i still dont know terminal commands',
  },
  {
    period: '2021',
    title: 'Built my first computer',
    desc: 'Where it all started, saved up and built my first PC. Spent more time picking parts than actually building it but it posted first try somehow',
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
            Hey! I'm a self taught developer and aspiring security researcher.
            I got into programming a few years ago and since I just can't stop. I mostly do cybersecurity and
            networking but I also fiddle with AI/ML stuff.
          </p>
          <p>
            I learn best by building things and breaking things. My homelab has
            been rebuilt thousands of times. I do CTFs
            sometimes and I'm always working on 4 barely started projects at once,
            mostly security tools or automation stuff.
          </p>
          <p>
            When I'm not at my computer (rare occurance), I'm playing basketball. Trying to get better at Rust
            right now and it's impossible I swear.
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
          <a href="https://discord.com/users/yethdev" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            @yethdev on Discord
          </a>
        </div>
      </section>
    </div>
  )
}
