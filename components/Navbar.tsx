"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Lock, Sun, Moon, Menu, X, Star } from "lucide-react"
import { useGitHubStars, formatStars } from "@/hooks/useGitHubStars"

const REPO = "smadabat1/Tengen"

const navLinks = [
    { href: "/docs", label: "Docs" },
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it Works" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/changelog", label: "Changelog" },
]

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const stars = useGitHubStars(REPO)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const starsLabel = formatStars(stars)

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "backdrop-blur-md bg-background/80 border-b border-border/50 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Tengen</span>
                </a>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-3">
                    {/* GitHub Star Button */}
                    <a
                        href={`https://github.com/${REPO}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-all duration-200 hover:bg-secondary/50"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {starsLabel && (
                            <>
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span>{starsLabel}</span>
                            </>
                        )}
                        {!starsLabel && <span>GitHub</span>}
                    </a>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="w-9 h-9 rounded-md border border-border/50 hover:border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary/50"
                        aria-label="Toggle theme"
                    >
                        <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>

                    {/* CTA */}
                    <a
                        href="/#self-host"
                        className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="w-9 h-9 rounded-md border border-border/50 flex items-center justify-center text-muted-foreground"
                        aria-label="Toggle theme"
                    >
                        <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="w-9 h-9 rounded-md border border-border/50 flex items-center justify-center text-muted-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border/50 backdrop-blur-md bg-background/95 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2 flex flex-col gap-2">
                        <a
                            href={`https://github.com/${REPO}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground py-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            View on GitHub {starsLabel && `· ⭐ ${starsLabel}`}
                        </a>
                        <a
                            href="/#self-host"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
