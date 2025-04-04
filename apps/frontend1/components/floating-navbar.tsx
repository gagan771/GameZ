"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function FloatingNavbar({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    isActive?: boolean
  }[]
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 z-50 mx-auto w-full max-w-5xl px-4 transition-all duration-300",
        isScrolled ? "top-4" : "top-6",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between rounded-full border border-white/10 bg-black/60 p-4 backdrop-blur-md",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        <Link href="/" className="font-bold text-xl text-white">
          GameZio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                pathname === item.link || item.isActive
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/10",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="ml-2 rounded-full">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="block md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm transition-colors",
                  pathname === item.link || item.isActive
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/10",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="mt-2 rounded-lg">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

