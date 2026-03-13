"use client"

import { useEffect, useRef, useState } from "react"

const encryptionPoints = [
    {
        title: "Master password never stored",
        desc: "It's used only in memory to derive your encryption key. We don't store it, we can't retrieve it.",
    },
    {
        title: "Argon2id key derivation",
        desc: "The gold standard for password hashing. Resistant to GPU and ASIC attacks.",
    },
    {
        title: "AES-256-GCM encryption",
        desc: "Every vault entry is individually encrypted with authenticated encryption.",
    },
    {
        title: "Unique IV per entry",
        desc: "No patterns, no shortcuts. Each encryption is completely independent.",
    },
    {
        title: "Stolen database = useless",
        desc: "Even if someone takes your database file, it's mathematically useless without your master password.",
    },
]

const encryptionFlow = `Master Password
  │
  ├─ Argon2id + Salt A ──► Auth Hash (stored)
  │
  └─ Argon2id + Salt B ──► Encryption Key
                                  │         (memory only)
                          AES-256-GCM + IV
                                  │
                          Encrypted Vault Entry`

export default function Encryption() {
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
        <section id="encryption" className="py-24 lg:py-32 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Paranoid about security.{" "}
                        <span className="text-muted-foreground font-normal">By design.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Here&apos;s exactly how your data is protected. No marketing fluff.
                    </p>
                </div>

                {/* Two Column */}
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left - Explanation */}
                    <div
                        className={`space-y-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                    >
                        {encryptionPoints.map((point, i) => (
                            <div
                                key={point.title}
                                className="flex gap-4"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">{point.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Code Diagram */}
                    <div
                        className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    >
                        <div className="terminal-block overflow-hidden">
                            {/* Terminal header */}
                            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs text-white/20 font-mono">encryption-flow.txt</span>
                            </div>
                            <pre className="p-6 text-sm leading-6 font-mono text-green-400/80 overflow-x-auto">
                                {encryptionFlow}
                            </pre>
                        </div>

                        {/* Callout */}
                        <div className="mt-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                            <p className="text-sm text-muted-foreground">
                                <span className="text-primary font-medium">Zero-knowledge architecture.</span>{" "}
                                Tengen operates on your machine. There are no external APIs involved in encryption
                                or decryption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
