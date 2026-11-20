import { cn } from '@/lib/utils'

export function ShinyText({ children, className }) {
  return (
    <span
      className={cn(
        'relative inline-block bg-[linear-gradient(110deg,#A8802A,45%,#F0CF7A,55%,#D4A83A)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shine',
        className,
      )}
    >
      {children}
    </span>
  )
}
