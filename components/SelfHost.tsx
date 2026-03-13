"use client"

import { useState } from "react"
import { Copy, Check, Globe, HardDrive } from "lucide-react"

const commands = [
    { prompt: "$", cmd: "git clone https://github.com/smadabat1/Tengen" },
    { prompt: "$", cmd: "cd tengen" },
    { prompt: "$", cmd: "cp .env.example .env" },
    { prompt: "$", cmd: "docker compose up -d" },
]

export default function SelfHost() {
    const [copied, setCopied] = useState(false)

    const fullCommand = commands.map((c) => c.cmd).join("\n")

    const handleCopy = () => {
        navigator.clipboard.writeText(fullCommand)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="self-host" className="py-24 lg:py-32 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            Up and running in{" "}
                            <span className="text-primary">2 minutes.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            No cloud accounts. No API keys. Just Docker.
                        </p>
                    </div>

                    {/* Terminal Block */}
                    <div className="terminal-block overflow-hidden relative">
                        {/* Header row */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs text-white/20 font-mono">zsh</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
                                aria-label="Copy commands"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-green-400" />
                                        <span className="text-green-400">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Commands */}
                        <div className="p-6 space-y-2 font-mono text-sm">
                            {commands.map((line, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-primary/60 select-none">{line.prompt}</span>
                                    <span className="text-green-400/90">{line.cmd}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-white/20 select-none text-xs">▶</span>
                                <span className="text-white/30 text-xs italic">Running on http://localhost:3000</span>
                            </div>
                        </div>
                    </div>

                    {/* Below terminal info */}
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
                            <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Open and you&apos;re done</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Navigate to{" "}
                                    <code className="px-1.5 py-0.5 rounded bg-secondary text-foreground font-mono text-xs border border-border/50">
                                        http://localhost:3000
                                    </code>{" "}
                                    and create your vault.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
                            <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Your data, your disk</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Vault lives in{" "}
                                    <code className="px-1.5 py-0.5 rounded bg-secondary text-foreground font-mono text-xs border border-border/50">
                                        /app/data/tengen.db
                                    </code>{" "}
                                    on your machine. That&apos;s it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
