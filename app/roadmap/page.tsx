import Navbar from "@/components/Navbar"
import Roadmap from "@/components/Roadmap"
import Footer from "@/components/Footer"

export const metadata = {
    title: "Roadmap | Tengen",
    description: "What we're building next for Tengen — Mobile apps, browser extensions, and more.",
}

export default function RoadmapPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-1 pt-12">
                <Roadmap />
            </div>
            <Footer />
        </main>
    )
}
