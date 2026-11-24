import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logo.jpg'
import { siteConfig } from '@/data/siteConfig'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useSiteReady } from '@/hooks/useSiteReady'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/magnetic'
import { cn } from '@/lib/utils'
import { EASE } from '@/lib/animations'

export function Navbar() {
  const { scrolled } = useScrollDirection()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const ready = useSiteReady()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else if (ready) document.body.style.overflow = ''
    return () => {
      if (ready) document.body.style.overflow = ''
    }
  }, [open, ready])

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300',
          scrolled || open ? 'glass shadow-[0_8px_30px_rgba(0,0,0,0.25)]' : 'bg-transparent',
        )}
        initial={false}
        animate={{
          y: ready ? 0 : -16,
          opacity: ready ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <nav
          className="container-wide flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 md:h-20 md:px-10"
          aria-label="Primary"
        >
          <Link to="/" className="group flex min-h-11 min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt={`${siteConfig.brand} logo`}
              width={44}
              height={44}
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-gold/40 transition duration-500 group-hover:ring-gold group-hover:shadow-[0_0_20px_rgba(212,168,58,0.35)] sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
            <span className="overflow-visible pb-0.5 font-script text-[1.35rem] font-medium italic leading-normal tracking-wide text-text-primary sm:text-2xl md:text-[1.65rem]">
              Brinda <span className="text-gold-light">Wedding</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3 py-2 text-sm tracking-wide text-text-muted transition hover:text-gold-light',
                      isActive && 'text-gold-light',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Magnetic className="hidden sm:inline-flex">
              <Button asChild size="sm">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </Magnetic>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/25 text-gold-light transition hover:border-gold/50 hover:bg-gold/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-bg-primary/97 pt-20 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,58,0.08),transparent_55%)]" />
            <motion.ul
              className="relative flex flex-col gap-1 px-6 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
              }}
            >
              {siteConfig.nav.map((item) => (
                <motion.li
                  key={item.path}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        'block border-b border-gold/10 py-4 font-display text-2xl text-text-primary transition hover:text-gold-light',
                        isActive && 'text-gold-light',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                className="pt-6"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button asChild className="w-full">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
