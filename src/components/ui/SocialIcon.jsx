import { Github, Linkedin, Twitter, Mail, Globe, Instagram, Youtube, Dribbble } from 'lucide-react'

// Icon registry — map the `icon` key from profile.socials to a lucide icon.
const registry = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  globe: Globe,
  instagram: Instagram,
  youtube: Youtube,
  dribbble: Dribbble,
}

/**
 * Renders the icon for a given social key, falling back to a globe.
 */
export default function SocialIcon({ name, ...props }) {
  const Icon = registry[name] ?? Globe
  return <Icon {...props} />
}
