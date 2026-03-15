"use client"

import { useEffect, useState } from "react"
import { Timeline } from "@/components/ui/timeline"
import { fetchRawGitHubFile } from "@/lib/github"
import { parseChangelog, TimelineEntry } from "@/lib/parser"

export default function Changelog() {
    const [data, setData] = useState<TimelineEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadChangelog() {
            try {
                const markdown = await fetchRawGitHubFile("CHANGELOG.md")
                const parsedData = parseChangelog(markdown)
                setData(parsedData)
            } catch (err) {
                console.error("Failed to load changelog:", err)
                setError("Failed to load the changelog from GitHub. Please try again later.")
            } finally {
                setLoading(false)
            }
        }
        loadChangelog()
    }, [])

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

            {loading ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        <p className="text-muted-foreground animate-pulse">Fetching latest updates...</p>
                    </div>
                </div>
            ) : error ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                        <p className="text-destructive font-medium">{error}</p>
                    </div>
                </div>
            ) : (
                <Timeline data={data} />
            )}
        </section>
    )
}
