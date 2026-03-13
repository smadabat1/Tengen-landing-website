"use client"

import { Lock, Home, Unlock, CloudOff, Box } from "lucide-react"

const badges = [
    { icon: <Lock className="w-5 h-5" />, label: "AES-256-GCM Encrypted" },
    { icon: <Home className="w-5 h-5" />, label: "100% Self Hosted" },
    { icon: <Unlock className="w-5 h-5" />, label: "Open Source" },
    { icon: <CloudOff className="w-5 h-5" />, label: "No Cloud. Ever." },
    { icon: <Box className="w-5 h-5" />, label: "Docker Ready" },
]

export default function TrustBar() {
    return (
        <section className="py-8 border-y border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {badges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <span className="text-primary/80">{badge.icon}</span>
                            <span className="font-medium">{badge.label}</span>
                            {i < badges.length - 1 && (
                                <span className="hidden md:inline ml-10 w-px h-4 bg-border/50" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
