import Section from '../ui/Section'
import ProjectGrid from '../projects/ProjectGrid'
import projectsData from '../../data/projects.json'

/**
 * Featured Projects — the highlighted subset (project.featured === true),
 * shown in a two-column grid.
 */
export default function FeaturedProjects() {
  const featured = (projectsData.projects || []).filter((p) => p.featured)

  return (
    <Section
      id="featured-projects"
      title="Featured Projects"
      description="Highlighted projects with demos, source, and write-ups."
    >
      <ProjectGrid
        projects={featured}
        columns={2}
        emptyHint="Mark a project as `featured: true` in projects.json to feature it here."
      />
    </Section>
  )
}
