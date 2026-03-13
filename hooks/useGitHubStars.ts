"use client"

import { useState, useEffect } from "react"

export function useGitHubStars(repo: string): number | null {
    const [stars, setStars] = useState<number | null>(null)

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
            .then((r) => r.json())
            .then((data) => {
                if (typeof data.stargazers_count === "number") {
                    setStars(data.stargazers_count)
                }
            })
            .catch(() => setStars(null))
    }, [repo])

    return stars
}

export function formatStars(count: number | null): string | null {
    if (count === null) return null
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`
    return count.toString()
}
