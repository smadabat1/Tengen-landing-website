import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BookOpen, Terminal, Shield } from "lucide-react"

export const metadata = {
    title: "Documentation | Tengen",
    description: "Official documentation for installing, configuring, and using Tengen.",
}

export default function DocsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-1 pt-40 pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        {/* Left Col: Title and Message */}
                        <div className="md:col-span-1">
                            <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
                                Documentation
                            </h1>
                            <p className="text-muted-foreground text-base mb-8">
                                Everything you need to deploy, secure, and manage your private vault.
                            </p>

                            <div className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-4 py-1">
                                Detailed guides are currently being written.<br />
                                <span className="text-foreground font-medium mt-1 inline-block">Check back soon.</span>
                            </div>
                        </div>

                        {/* Right Col: Cards */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Quickstart Card */}
                            <div className="p-5 rounded-xl border border-border/40 bg-card/50 hover:border-primary/40 hover:bg-card transition-all cursor-pointer group">
                                <Terminal className="w-6 h-6 text-primary mb-3 transform group-hover:scale-110 transition-transform" />
                                <h3 className="text-base font-semibold mb-1.5">Quickstart</h3>
                                <p className="text-xs text-muted-foreground">
                                    Get up and running in 2 mins via Docker.
                                </p>
                            </div>

                            {/* Security Arch Card */}
                            <div className="p-5 rounded-xl border border-border/40 bg-card/50 hover:border-primary/40 hover:bg-card transition-all cursor-pointer group">
                                <Shield className="w-6 h-6 text-primary mb-3 transform group-hover:scale-110 transition-transform" />
                                <h3 className="text-base font-semibold mb-1.5">Security</h3>
                                <p className="text-xs text-muted-foreground">
                                    Deep dive into Argon2id & AES-256-GCM.
                                </p>
                            </div>

                            {/* API Ref Card */}
                            <div className="p-5 rounded-xl border border-border/40 bg-card/50 hover:border-primary/40 hover:bg-card transition-all cursor-pointer group">
                                <BookOpen className="w-6 h-6 text-primary mb-3 transform group-hover:scale-110 transition-transform" />
                                <h3 className="text-base font-semibold mb-1.5">API Ref</h3>
                                <p className="text-xs text-muted-foreground">
                                    Interact with the vault programmatically.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
