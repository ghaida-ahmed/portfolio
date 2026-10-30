import Layout from './components/layout/Layout'
import About from './components/sections/About'
import FeaturedProjects from './components/sections/FeaturedProjects'
import OtherProjects from './components/sections/OtherProjects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

/**
 * Single-page portfolio. Sections render in order inside the shared layout;
 * each reads its own placeholder data and shows an empty state until filled.
 */
export default function App() {
  return (
    <Layout>
      <About />
      <Skills />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />

      <footer className="border-t border-slate-200/70 pt-8 text-center font-mono text-[11px] tracking-wide text-slate-400 dark:border-white/[0.06] dark:text-slate-600">
        <p>Built with React, Vite &amp; Tailwind CSS.</p>
      </footer>
    </Layout>
  )
}
