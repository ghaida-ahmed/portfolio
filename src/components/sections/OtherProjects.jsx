import Section from '../ui/Section'
import ProjectGrid from '../projects/ProjectGrid'
import projectsData from '../../data/projects.json'

/**
 * Other Projects — everything not marked featured, in a denser three-column
 * grid.
 */
export default function OtherProjects() {
  const others = (projectsData.projects || []).filter((p) => !p.featured)

  return (
    <Section
      id="other-projects"
      title="Other Projects"
      description="Additional projects and experiments."
    >
      <ProjectGrid
        projects={others}
        columns={3}
        emptyHint="Non-featured projects from projects.json appear here."
      />
    </Section>
  )
}
