"use client"

import { Lock } from "lucide-react"

const links = [
    { href: "https://github.com/smadabat1/Tengen", label: "GitHub" },
    { href: "https://github.com/smadabat1/Tengen/blob/main/LICENSE", label: "License" },
    { href: "#self-host", label: "Self Host Guide" },
]

export default function Footer() {
    return (
        <footer className="border-t border-border/30 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    {/* Left: Logo + Tagline */}
                    <div className="flex flex-col gap-2">
                        <a href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                                <Lock className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="font-bold tracking-tight">Tengen</span>
                        </a>
                        <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                            Your passwords, your machine. No clouds, no servers, no funny business.
                        </p>
                    </div>

                    {/* Right: Links */}
                    <div className="flex flex-col gap-3 md:items-end w-full md:w-auto">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Resources</p>
                        <ul className="flex flex-col md:items-end space-y-2">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-sm text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-muted-foreground/60">
                        Built with 🔒 by the community · AGPL-3.0
                    </p>
                    <p className="text-xs text-muted-foreground/40">
                        Inspired by Tengen — the immortal barrier master.
                    </p>
                </div>
            </div>
        </footer>
    )
}
