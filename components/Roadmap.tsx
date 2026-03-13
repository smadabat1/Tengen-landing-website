"use client"

import { Timeline } from "@/components/ui/timeline"
import { CheckCircle2, Circle } from "lucide-react"

const roadmapData = [
    {
        title: "v1.0 — Core",
        content: (
            <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Current Focus</h4>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    The foundation. Everything you need, nothing you don't.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Username + master password authentication</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Argon2id key derivation + AES-256-GCM encryption</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Full vault CRUD (add, edit, delete, view entries)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Password generator (configurable length, symbols, digits)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Password strength meter (zxcvbn)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>HaveIBeenPwned breach detection (auto + manual)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Tags, search, filtering, sorting</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Copy to clipboard with 30s auto-clear</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Auto-lock after 15 minutes of inactivity</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Password Health dashboard (weak, pwned, reused, old)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Dark / light theme</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Docker Compose — one command setup</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> <span>Security headers + CSP</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "v1.1",
        content: (
            <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Polish & Import</h4>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    Making it easier to switch to Tengen and day-to-day use smoother.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Import from CSV</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Import from Bitwarden export</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Import from 1Password export</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Encrypted vault backup / export</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Favicon fetching for entry URLs</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Keyboard shortcuts</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Duplicate password warnings on entry cards</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Password age warnings (flag entries older than 90 days)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Vault search improvements (search by username, notes)</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "v1.2",
        content: (
            <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Security Hardening</h4>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    Going deeper on the security layer.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>HTTPS support with self-signed cert auto-generation</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Vault unlock with biometrics (browser WebAuthn API)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Login attempt rate limiting + lockout</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Audit log (track when entries were accessed/modified)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Argon2id parameter tuning via config</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Optional two-factor authentication (TOTP)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Session management (view and revoke active sessions)</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "v2.0",
        content: (
            <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Mobile</h4>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    Tengen in your pocket.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>React Native mobile app (Android APK first)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Connects to your self-hosted Tengen instance</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Biometric unlock on mobile</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Autofill support (Android)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>iOS support (v2.1)</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Future",
        content: (
            <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Considering</h4>
                <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                    Ideas being explored. No promises yet.
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Browser extension (Chrome + Firefox)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Multi-user support with separate encrypted vaults</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Shared vault entries (for families/small teams)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Emergency access (trusted contact can request access after a timeout)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>CLI tool (`tengen get gmail`, `tengen add`, etc.)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Encrypted file attachments per entry</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Self-hosted sync between multiple devices</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" /> <span>Third-party security audit (codebase review by Cure53 or similar)</span>
                    </div>
                </div>
            </div>
        ),
    },
]

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 lg:py-32 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                    The <span className="text-primary">Roadmap.</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    We&apos;re building Tengen in the open. Here is exactly what we are working on next, and where the project is headed over the next year.
                </p>
            </div>

            <Timeline data={roadmapData} />
        </section>
    )
}
