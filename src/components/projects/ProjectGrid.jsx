import { useState } from 'react'
import { FolderGit2 } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import EmptyState from '../ui/EmptyState'
import Reveal from '../ui/Reveal'

/**
 * Responsive card grid + shared detail modal. Cards fade in with a subtle
 * stagger as the grid scrolls into view.
 */
export default function ProjectGrid({ projects = [], columns = 2, emptyHint }) {
  const [active, setActive] = useState(null)

  if (projects.length === 0) {
    return (
      <EmptyState
        icon={FolderGit2}
        title="No projects yet"
        hint={emptyHint || 'Projects added to projects.json will appear here as cards.'}
      />
    )
  }

  const cols = columns === 3 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-2'

  return (
    <>
      <Reveal stagger className={`grid grid-cols-1 gap-5 ${cols}`}>
        {projects.map((project) => (
          <Reveal.Item key={project.id}>
            <ProjectCard project={project} onOpen={setActive} className="h-full" />
          </Reveal.Item>
        ))}
      </Reveal>

      <ProjectModal project={active} open={!!active} onClose={() => setActive(null)} />
    </>
  )
}
