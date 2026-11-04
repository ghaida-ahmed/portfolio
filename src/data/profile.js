/**
 * Central profile + site configuration.
 *
 * Components read from this file so content lives in one place. Fields left as
 * empty strings ('') are intentional placeholders for sections not filled yet.
 */

export const profile = {
  name: 'Ghaida Ahmed Almughamis',
  title: 'Software Engineering Student',
  intro: 'Software Development | AI Integration | Cloud & DevOps',
  avatar: '', // path to profile image, e.g. "/assets/avatar.jpg"
  cvUrl: '/assets/Ghaida_Almughamis_CV.pdf', // CV/resume PDF in public/assets
  email: 'ghaidahmed.tech@gmail.com',
  location: 'Riyadh, Saudi Arabia',

  // Full bio shown in the About section. Blank lines separate paragraphs.
  about: [
    'Software Engineering student at Princess Nourah bint Abdulrahman University with a strong interest in web development, AI integration, and emerging technologies. Passionate about building impactful software solutions and continuously expanding knowledge in software engineering, cloud technologies, and intelligent systems.',
    'Interested in building scalable software solutions and applications that address real-world problems while continuously exploring cloud and DevOps technologies.',
    'Actively involved in technical projects, competitions, research activities, and leadership initiatives while exploring modern development practices and industry technologies.',
  ].join('\n'),
}

/**
 * Technical highlights shown in the Skills section as categorized cards.
 * `icon` is a lucide icon name resolved in the Skills component.
 */
export const highlights = [
  {
    label: 'Software Engineering',
    icon: 'Boxes',
    items: [
      'Software Architecture',
      'Software Design',
      'Requirements Engineering',
      'SDLC',
      'Agile & Scrum',
      'Waterfall',
      'Software Testing',
      'Software Quality Assurance',
    ],
  },
  {
    label: 'Programming',
    icon: 'Code2',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'SQL'],
  },
  {
    label: 'Web & Full-Stack',
    icon: 'Globe',
    items: ['React', 'Next.js', 'FastAPI', 'HTML/CSS', 'REST APIs', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    icon: 'Database',
    items: ['PostgreSQL', 'Supabase', 'pgvector'],
  },
  {
    label: 'AI & Data',
    icon: 'Brain',
    items: [
      'Generative AI',
      'RAG',
      'LLM Integration',
      'Data Analysis',
      'Data Visualization',
      'Pandas',
      'Jupyter Notebook',
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: 'Cloud',
    items: [
      'Git & GitHub',
      'Docker',
      'CI/CD',
      'Vercel',
      'Render',
      'VS Code',
      'Xcode',
      'Figma',
      'Lucidchart',
      'Microsoft Excel',
    ],
  },
  {
    label: 'Currently Learning',
    icon: 'Sparkles',
    items: ['Machine Learning', 'Azure Fundamentals (AZ-900)', 'Flutter', 'Dart'],
  },
]

/**
 * Social links shown in the sidebar. `icon` maps to a key in the icon registry
 * (see components/ui/SocialIcon.jsx). Leave `url` empty to hide a link.
 */
export const socials = [
  { key: 'github', label: 'GitHub', icon: 'github', url: 'https://github.com/ghaida-ahmed' },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/ghaida-almughamis-79b97529a',
  },
  { key: 'email', label: 'Email', icon: 'mail', url: 'mailto:ghaidahmed.tech@gmail.com' },
]

/**
 * The single-page navigation registry — drives both the sidebar nav and the
 * order of sections rendered in the main column. Keep ids in sync with the
 * <Section id="..."> used by each section component.
 */
export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'featured-projects', label: 'Featured Projects' },
  { id: 'other-projects', label: 'Other Projects' },
  { id: 'contact', label: 'Contact' },
]
