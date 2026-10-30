/**
 * Tiny className joiner — filters out falsy values so conditional classes stay
 * readable. Deliberately dependency-free.
 *
 *   cn('base', isActive && 'active', error ? 'text-red-500' : null)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
