"use client"
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface TimelineEntry {
    title: string
    content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [ref])

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return
            const elements = ref.current.querySelectorAll('.timeline-item')
            let currentActiveIndex = 0
            const viewportHalf = window.innerHeight / 2
            elements.forEach((el, index) => {
                const rect = el.getBoundingClientRect()
                if (rect.top <= viewportHalf) {
                    currentActiveIndex = index
                }
            })
            setActiveIndex(currentActiveIndex)
        }
        window.addEventListener("scroll", handleScroll)
        // Fire once to set initial state
        setTimeout(handleScroll, 100)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div
            className="w-full bg-background dark:bg-background font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => {
                    const isActive = activeIndex === index
                    const isPassed = index <= activeIndex
                    return (
                        <div
                            key={index}
                            className="timeline-item flex justify-start pt-10 md:pt-40 md:gap-10"
                        >
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                                    <div className={cn("h-4 w-4 rounded-full border p-2 transition-colors duration-300", isPassed ? "bg-primary border-primary" : "bg-border border-border/50")} />
                                </div>
                                <h3 className={cn("hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground/40")}>
                                    {item.title}
                                </h3>
                            </div>

                            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                <h3 className={cn("md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground/40")}>
                                    {item.title}
                                </h3>
                                {item.content}{" "}
                            </div>
                        </div>
                    )
                })}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border/20 dark:via-border/50 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
