"use client"

import { Timeline } from "@/components/ui/timeline"
import { CheckCircle2, Circle } from "lucide-react"

const changelogData = [
    {
        title: "v1.0.0",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-bold text-foreground">Initial Release</h4>
                    <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-secondary text-muted-foreground border border-border/50">Coming Soon</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    First public release of Tengen. Built for personal use, open sourced for everyone.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Username + master password authentication</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>AES-256-GCM encryption at rest with Argon2id key derivation</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Full vault CRUD — add, edit, delete, view password entries</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Password generator with configurable options</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Real-time password strength meter powered by zxcvbn</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>HaveIBeenPwned breach detection — auto check on save, manual refresh anytime</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Tags, search, filtering and sorting across the vault</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Password Health dashboard — see weak, pwned, reused and old passwords at a glance</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Copy to clipboard with automatic 30 second clear</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Auto-lock vault after 15 minutes of inactivity</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Dark and light theme with toggle</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Docker Compose setup — `docker compose up` and you&apos;re done</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Security headers and Content Security Policy middleware</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Data persisted in SQLite — a single file on your machine, fully yours</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Pre-release",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-bold text-foreground">Development</h4>
                    <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-secondary text-muted-foreground border border-border/50">March 2026</span>
                </div>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Project scaffolded — FastAPI backend, React frontend, SQLite database</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Encryption architecture designed — Argon2id + AES-256-GCM</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Docker Compose setup working end to end</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>GitHub repository opened at github.com/smadabat1/tengen</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Domain tengen.in acquired</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>AGPL-3.0 license selected</span>
                    </div>
                </div>
            </div>
        ),
    },
]

export default function Changelog() {
    return (
        <section id="changelog" className="route-page-bg py-24 lg:py-32 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                    The <span className="text-primary">Changelog.</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Everything we&apos;ve shipped. We build quickly and push updates constantly.
                </p>
            </div>

            <Timeline data={changelogData} />
        </section>
    )
}
