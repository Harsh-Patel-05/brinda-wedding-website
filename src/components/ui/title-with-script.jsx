import { cn } from '@/lib/utils'

/** Renders ["Before", "scriptWord", "after"] with the middle word in script gold */
export function TitleWithScript({ parts, as: Tag = 'h2', className }) {
  const [before, script, after] = parts
  return (
    <Tag className={cn(className)}>
      {before}{' '}
      {script ? <span className="font-script text-gold-gradient">{script}</span> : null}
      {after ? <> {after}</> : null}
    </Tag>
  )
}
