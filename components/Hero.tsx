"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Github } from "lucide-react"

const REPO_URL = "https://github.com/smadabat1/Tengen"

export default function Hero() {
    const beamsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = beamsRef.current
        if (!el) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            el.style.setProperty("--mouse-x", `${x}%`)
            el.style.setProperty("--mouse-y", `${y}%`)
        }

        el.addEventListener("mousemove", handleMouseMove)
        return () => el.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section
            ref={beamsRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-background">
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Spotlight / Radial Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 60% 50% at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(139, 92, 246, 0.12) 0%, transparent 70%)`,
                    transition: "background 0.1s ease",
                }}
            />

            {/* Static Center Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-20 dark:opacity-10 blur-3xl bg-violet-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-8 animate-fade-up opacity-0-init"
                    style={{ animationFillMode: "forwards" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Open Source · Self-Hostable · AGPL-3.0</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up opacity-0-init animate-delay-100"
                    style={{ animationFillMode: "forwards" }}>
                    <span className="block dark:gradient-text gradient-text-light text-foreground">
                        Your passwords live here.
                    </span>
                    <span className="block text-muted-foreground font-normal mt-2 text-4xl sm:text-5xl lg:text-6xl">
                        Not on someone else&apos;s server.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up opacity-0-init animate-delay-200"
                    style={{ animationFillMode: "forwards" }}>
                    Tengen is a self-hostable password manager. Encrypted at rest, runs on your machine,
                    never leaves your network. Open source, always.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up opacity-0-init animate-delay-300"
                    style={{ animationFillMode: "forwards" }}>
                    <a
                        href="/#self-host"
                        className="relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[1px] hover:scale-[1.02] transition-transform duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                    >
                        {/* Moving gradient border */}
                        <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--background))_0%,hsl(var(--primary))_50%,hsl(var(--background))_100%)]" />

                        {/* Inner button surface */}
                        <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-background dark:bg-zinc-950 px-8 py-3 text-sm font-medium text-foreground backdrop-blur-3xl gap-2 transition-colors group-hover:bg-muted/50 dark:group-hover:bg-zinc-900 border border-transparent shadow-[0_0_20px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                            Self Host in 2 Minutes
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </a>
                    <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary/40 transition-all duration-200 hover:scale-[1.02]"
                    >
                        <Github className="w-4 h-4" />
                        View on GitHub
                    </a>
                </div>

                {/* Product Hunt Badge */}
                <div className="flex justify-center mb-10 animate-fade-up opacity-0-init animate-delay-400"
                    style={{ animationFillMode: "forwards" }}>
                    <a href="https://www.producthunt.com/products/tengen?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tengen" target="_blank" rel="noopener noreferrer">
                        {/* Light Theme Badge */}
                        <img 
                            alt="Tengen - Own your passwords. Own your security. | Product Hunt" 
                            width="150" 
                            height="54" 
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1098495&theme=light&t=1773525504209" 
                            className="block dark:hidden hover:scale-105 transition-transform duration-200"
                        />
                        {/* Dark Theme Badge */}
                        <img 
                            alt="Tengen - Own your passwords. Own your security. | Product Hunt" 
                            width="150" 
                            height="54" 
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1098495&theme=dark&t=1773525689754" 
                            className="hidden dark:block hover:scale-105 transition-transform duration-200"
                        />
                    </a>
                </div>

                {/* Social Proof */}
                <p className="text-xs text-muted-foreground/60 animate-fade-up opacity-0-init animate-delay-500"
                    style={{ animationFillMode: "forwards" }}>
                    Open Source{" "}
                    <span className="mx-2 text-border">·</span>
                    AGPL-3.0{" "}
                    <span className="mx-2 text-border">·</span>
                    Built with FastAPI + React
                </p>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground" />
            </div>
        </section>
    )
}
