import { cn } from '@/lib/utils'

export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  colorFrom = '#A8802A',
  colorTo = '#F0CF7A',
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden',
        className,
      )}
    >
      <div
        className="absolute inset-[-100%] animate-border-beam opacity-70"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 40deg, ${colorTo} 80deg, transparent 120deg)`,
          animationDuration: `${duration}s`,
          width: size * 3,
          height: size * 3,
          left: '50%',
          top: '50%',
          marginLeft: -size * 1.5,
          marginTop: -size * 1.5,
        }}
      />
      <div className="absolute inset-[1px] rounded-[inherit] bg-bg-secondary" />
    </div>
  )
}
