import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the sidebar nav can highlight it.
 * @param {string[]} sectionIds - ids of the <section> elements to observe.
 * @returns {string} the id of the section closest to the top of the viewport.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        // Trigger when a section occupies the upper-middle band of the viewport
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
