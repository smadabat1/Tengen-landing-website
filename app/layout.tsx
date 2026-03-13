import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Tengen — Self-Hostable Password Manager",
    description:
        "Tengen is a self-hostable, open source password manager. Encrypted at rest, runs on your machine, never leaves your network.",
    keywords: ["password manager", "self-hosted", "open source", "privacy", "encryption", "docker"],
    openGraph: {
        title: "Tengen — Self-Hostable Password Manager",
        description: "Your passwords live here. Not on someone else's server.",
        url: "https://tengen.in",
        siteName: "Tengen",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tengen — Self-Hostable Password Manager",
        description: "Your passwords live here. Not on someone else's server.",
    },
    metadataBase: new URL("https://tengen.in"),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
