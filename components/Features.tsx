"use client"

import { useEffect, useRef, useState } from "react"
import { Lock, Home, Key, Shield, AlertTriangle, Tag, Moon, Box, Unlock, NotebookPen } from "lucide-react"

const features = [
    {
        icon: <Lock className="w-8 h-8 text-primary" />,
        title: "Encrypted at Rest",
        description: "AES-256-GCM encryption. Your master password never leaves your device.",
        size: "large",
    },
    {
        icon: <Home className="w-8 h-8 text-primary" />,
        title: "Self Hosted",
        description: "Runs entirely on your machine via Docker. Data never touches external servers.",
        size: "small",
    },
    {
        icon: <Key className="w-8 h-8 text-primary" />,
        title: "Password Manager",
        description: "Create, update, delete password entries. Generator, breach detection, health analysis — all included.",
        size: "small",
    },
    {
        icon: <NotebookPen className="w-8 h-8 text-primary" />,
        title: "Private Notes",
        description: "Encrypted notes with folders, tags, and per-note PIN/password lock. Your thoughts, only yours.",
        size: "small",
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Strength Checker",
        description: "Real-time password strength analysis powered by zxcvbn.",
        size: "small",
    },
    {
        icon: <AlertTriangle className="w-8 h-8 text-primary" />,
        title: "Breach Detection",
        description: "HaveIBeenPwned integration. Know instantly if your passwords are compromised.",
        size: "large",
    },
    {
        icon: <Tag className="w-8 h-8 text-primary" />,
        title: "Tags & Filters",
        description: "Organise your vault with tags, search, and sorting.",
        size: "small",
    },
    {
        icon: <Moon className="w-8 h-8 text-primary" />,
        title: "Dark & Light Mode",
        description: "Because your eyes matter.",
        size: "small",
    },
    {
        icon: <Box className="w-8 h-8 text-primary" />,
        title: "Docker Ready",
        description: "One command. `docker compose up`. That's it.",
        size: "small",
    },
    {
        icon: <Unlock className="w-8 h-8 text-primary" />,
        title: "Open Source",
        description: "Fully auditable. No black boxes. Trust the code, not the promise.",
        size: "small",
    },
]

function FeatureCard({ icon, title, description, size, delay }: {
    icon: React.ReactNode
    title: string
    description: string
    size: string
    delay: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`group relative p-6 rounded-2xl border border-border/40 bg-card/50 hover:border-primary/40 transition-all duration-300 hover:bg-card hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.01] cursor-default ${size === "large" ? "md:col-span-2" : ""
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s, box-shadow 0.3s, background-color 0.3s` }}
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.08), transparent 60%)" }} />

            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 origin-left">{icon}</div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    )
}

export default function Features() {
    return (
        <section id="features" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Everything you need.{" "}
                        <span className="text-muted-foreground font-normal">Nothing you don&apos;t.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Tengen keeps things simple. No subscriptions, no telemetry, no nonsense.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((feature, i) => (
                        <FeatureCard key={feature.title} {...feature} delay={i * 60} />
                    ))}
                </div>
            </div>
        </section>
    )
}
