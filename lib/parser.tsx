import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export interface TimelineEntry {
    title: React.ReactNode;
    content: React.ReactNode;
}

export function parseRoadmap(markdown: string): TimelineEntry[] {
    const sections = markdown.split(/^## /m).slice(1);
    
    // First pass: extract all info
    const parsedSections = sections.map((section) => {
        const lines = section.split("\n");
        const titleLine = lines[0].trim();
        const remainingContent = lines.slice(1).join("\n");
        
        // Split title into version and subtitle (e.g., "v1.0 — Core" -> "v1.0" and "Core")
        // Handles em-dash (—), en-dash (–), and double hyphens (--) with flexible spacing
        const rawTitle = titleLine.replace(/^✅ |^🔜 |^💭 /, "");
        let timelineTitle = rawTitle;
        let mainContentHeader = "";
        
        const splitMatch = rawTitle.match(/^(.*?)\s*(?:—|–|--)\s*(.*)$/);
        if (splitMatch) {
            timelineTitle = splitMatch[1].trim();
            mainContentHeader = splitMatch[2].trim();
        } else if (rawTitle.includes("Future / Considering")) {
            timelineTitle = "Future";
            mainContentHeader = "Considering";
        }

        // Extract description from blockquote
        const descriptionMatch = remainingContent.match(/^> (.*)$/m);
        const description = descriptionMatch ? descriptionMatch[1] : "";
        
        const items: { text: string; completed: boolean }[] = [];
        const itemRegex = /^- \[([ x])\] (.*)$/gm;
        let match;
        while ((match = itemRegex.exec(remainingContent)) !== null) {
            items.push({
                completed: match[1] === "x",
                text: match[2].trim(),
            });
        }
        
        return {
            timelineTitle,
            mainContentHeader,
            description,
            items,
            rawTitle
        };
    });

    // Find the latest released version
    // It's the last section that contains "(Released)" case-insensitive
    let latestReleasedIndex = -1;
    for (let i = parsedSections.length - 1; i >= 0; i--) {
        if (parsedSections[i].rawTitle.toLowerCase().includes("(released)")) {
            latestReleasedIndex = i;
            break;
        }
    }

    // Second pass: convert to TimelineEntry
    return parsedSections.map((entry, index) => {
        const isLatest = index === latestReleasedIndex;

        return {
            title: entry.timelineTitle,
            content: (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        {entry.mainContentHeader && (
                            <h4 className="text-xl font-bold text-foreground">{entry.mainContentHeader}</h4>
                        )}
                        {isLatest && (
                            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                                Latest
                            </span>
                        )}
                    </div>
                    {entry.description && (
                         <p className="text-muted-foreground text-sm mb-6 max-w-lg leading-relaxed">
                            {entry.description}
                        </p>
                    )}
                    <div className="space-y-3">
                        {entry.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                                {item.completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                ) : (
                                    <Circle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                )}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        };
    });
}

export function parseChangelog(markdown: string): TimelineEntry[] {
    const sections = markdown.split(/^## /m).slice(1);
    
    return sections.map((section) => {
        const lines = section.split("\n");
        const titleLine = lines[0].trim();
        const contentLines = lines.slice(1);
        
        // Split title into version and date (e.g., "v1.0.0 - 2026-03-14" -> "v1.0.0" and "2026-03-14")
        let timelineTitle = titleLine;
        let mainContentHeader = "";
        
        // Match both single hyphen and en/em dashes
        const splitMatch = titleLine.match(/^(.*?)\s*(?:-|—|–)\s*(.*)$/);
        if (splitMatch) {
            timelineTitle = splitMatch[1].trim();
            mainContentHeader = splitMatch[2].trim();
        }
        
        return {
            title: timelineTitle,
            content: (
                <div className="prose prose-sm prose-invert max-w-none">
                    {mainContentHeader && (
                        <h4 className="text-xl font-bold text-foreground mb-6">{mainContentHeader}</h4>
                    )}
                    <div className="space-y-3">
                        {contentLines.map((line, idx) => {
                             const trimmed = line.trim();
                             if (!trimmed) return null;
                             
                             // Bug 1: Remove separators (lines consisting only of hyphens, underscores, or asterisks)
                             if (/^[ \-_*]{3,}$/.test(trimmed)) return null;

                             if (trimmed.startsWith("###")) {
                                 return <h4 key={idx} className="text-lg font-semibold text-foreground mt-10 mb-4">{trimmed.replace("### ", "")}</h4>;
                             }

                             if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                                 return <h5 key={idx} className="text-base font-bold text-foreground mt-6 mb-2">{trimmed.replace(/\*\*/g, "")}</h5>;
                             }
                             
                             if (trimmed.startsWith("-")) {
                                 const text = trimmed.replace(/^- (?:\[[ x]\] )?/, "");
                                 
                                 return (
                                     <div key={idx} className="flex items-start gap-3 text-sm text-foreground">
                                         {/* Bug 2: Ensure icon is truly unshrinkable */}
                                         <div className="w-4 h-4 mt-0.5 flex-none text-primary">
                                            <CheckCircle2 className="w-4 h-4" />
                                         </div>
                                         <span className="flex-1 leading-relaxed">{text}</span>
                                     </div>
                                 );
                             }
                             
                             return <p key={idx} className="text-muted-foreground text-sm leading-relaxed mb-4">{trimmed}</p>;
                        })}
                    </div>
                </div>
            )
        };
    });
}
