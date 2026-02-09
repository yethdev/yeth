import './Tag.css'

const Tag = ({ children, variant = 'default' }) => (
  <span className={`tag tag-${variant}`}>{children}</span>
)

export default Tag
