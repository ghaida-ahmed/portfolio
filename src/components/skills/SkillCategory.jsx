import SkillCard from './SkillCard'
import Reveal from '../ui/Reveal'

/**
 * A titled group of skill icon cards. Renders one block per category from
 * skills.json, with a mono label + count and a staggered card reveal.
 */
export default function SkillCategory({ category, items = [] }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          {category}
        </h3>
        <span className="h-px flex-1 bg-slate-200/70 dark:bg-white/[0.06]" />
        <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
          {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <Reveal stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((skill) => (
          <Reveal.Item key={skill.name}>
            <SkillCard {...skill} />
          </Reveal.Item>
        ))}
      </Reveal>
    </div>
  )
}
