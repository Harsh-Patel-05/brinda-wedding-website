import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 min-h-11 px-6 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-gold-gradient text-bg-primary shadow-[0_0_24px_rgba(212,168,58,0.25)] hover:shadow-[0_0_40px_rgba(240,207,122,0.45)] hover:brightness-110',
        outline:
          'border border-gold/50 bg-transparent text-gold-light hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_24px_rgba(212,168,58,0.15)]',
        ghost: 'bg-transparent text-text-primary hover:text-gold-light hover:bg-bg-elevated/60',
        link: 'text-gold underline-offset-4 hover:underline px-0 min-h-0',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 rounded-md px-4 text-xs',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'h-11 w-11 px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
