"use client"

import { useEffect, useState } from "react"
import { Timeline } from "@/components/ui/timeline"
import { fetchRawGitHubFile } from "@/lib/github"
import { parseRoadmap, TimelineEntry } from "@/lib/parser"

export default function Roadmap() {
    const [data, setData] = useState<TimelineEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadRoadmap() {
            try {
                const markdown = await fetchRawGitHubFile("roadmap.md")
                const parsedData = parseRoadmap(markdown)
                setData(parsedData)
            } catch (err) {
                console.error("Failed to load roadmap:", err)
                setError("Failed to load the roadmap from GitHub. Please try again later.")
            } finally {
                setLoading(false)
            }
        }
        loadRoadmap()
    }, [])

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

            {loading ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        <p className="text-muted-foreground animate-pulse">Fetching latest roadmap...</p>
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
