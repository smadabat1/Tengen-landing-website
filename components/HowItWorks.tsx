"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
    {
        number: "01",
        title: "Deploy",
        description:
            "Pull the Docker image. Run docker compose up. Done in under 2 minutes.",
        code: "docker compose up -d",
    },
    {
        number: "02",
        title: "Set Up",
        description:
            "Create your username and master password. Your encryption key is derived locally, never stored.",
        code: "# Runs at localhost:3000",
    },
    {
        number: "03",
        title: "Use It",
        description:
            "Add passwords, generate new ones, check for breaches. Your data stays yours.",
        code: "# Your vault. Your machine.",
    },
]

export default function HowItWorks() {
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
        <section id="how-it-works" className="py-24 lg:py-32 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Simple by design.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        No SaaS accounts. No cloud setup. Just three steps.
                    </p>
                </div>

                {/* Steps */}
                <div ref={ref} className="relative">
                    {/* Connecting line — desktop */}
                    <div className="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        {steps.map((step, i) => (
                            <div
                                key={step.number}
                                className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                {/* Step Number Circle */}
                                <div className="relative mb-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {/* Inline code hint */}
                                <div className="terminal-block px-4 py-2 text-xs text-green-400/80 w-full max-w-xs">
                                    <span className="text-muted-foreground/40 mr-2">$</span>
                                    {step.code}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
