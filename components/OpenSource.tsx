"use client"

import { Github, Coffee, Unlock } from "lucide-react"
import { useGitHubStars, formatStars } from "@/hooks/useGitHubStars"

const REPO = "smadabat1/Tengen"
const REPO_URL = "https://github.com/smadabat1/Tengen"
const COFFEE_URL = "https://www.buymeacoffee.com/"

export default function OpenSource() {
    const stars = useGitHubStars(REPO)
    const starsLabel = formatStars(stars)

    return (
        <section id="open-source" className="py-24 lg:py-32 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex w-16 h-16 rounded-2xl border border-border/40 bg-card/50 shadow-sm items-center justify-center mb-8">
                        <Unlock className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Open source. <span className="text-muted-foreground font-normal">Always.</span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Tengen is licensed under{" "}
                        <span className="text-foreground font-medium">AGPL-3.0</span>. Every line of code is
                        public. Audit it, fork it, contribute to it. Security software should never be a black
                        box.
                    </p>

                    {starsLabel && (
                        <p className="text-muted-foreground/60 text-sm mb-10">
                            Join{" "}
                            <span className="text-foreground font-medium">{starsLabel} developers</span> who trust
                            Tengen with their vault.
                        </p>
                    )}
                    {!starsLabel && <div className="mb-10" />}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={REPO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-border text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                        >
                            <Github className="w-4 h-4" />
                            Star on GitHub
                            {starsLabel && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-yellow-400/10 text-yellow-400 text-xs">
                                    ⭐ {starsLabel}
                                </span>
                            )}
                        </a>

                        <a
                            href={COFFEE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-[1.02]"
                        >
                            <Coffee className="w-4 h-4" />
                            Buy me a coffee
                        </a>
                    </div>

                    <p className="mt-8 text-xs text-muted-foreground/50">
                        If Tengen saves you time or gives you peace of mind, any support is appreciated.
                    </p>
                </div>
            </div>
        </section>
    )
}
