'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PRIMARY_CTA } from '@/data/navigation';
import { BRAND } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          'fixed top-0 inset-x-0 z-50',
          'transition-all duration-500',
          scrolled ? 'py-3' : 'py-5',
        )}
      >
        <div className="container-soft">
          <div
            className={cn(
              'flex items-center justify-between',
              'rounded-full px-5 md:px-7 py-3',
              'transition-all duration-500',
              scrolled
                ? 'glass-warm'
                : 'bg-transparent',
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ink-900 shadow-sm">
                <Image
                  src={BRAND.logoSrc}
                  alt={`${BRAND.name} logo`}
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </span>
              <span className="font-display text-xl md:text-2xl text-ink-900 tracking-tight">
                {BRAND.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-ink-800 hover:text-coral-600 rounded-full hover:bg-cream-200/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a href={PRIMARY_CTA.href} className="hidden sm:block">
                <Button size="sm">{PRIMARY_CTA.label}</Button>
              </a>
              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-900"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-cream-100/95 backdrop-blur-xl pt-24 px-6"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="block py-4 text-2xl font-display text-ink-900 border-b border-cream-300/60"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8"
              >
                <a href={PRIMARY_CTA.href} onClick={() => setMenuOpen(false)}>
                  <Button size="lg" className="w-full">{PRIMARY_CTA.label}</Button>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
