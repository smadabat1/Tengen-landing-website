import Navbar from "@/components/Navbar"
import Changelog from "@/components/Changelog"
import Footer from "@/components/Footer"

export const metadata = {
    title: "Changelog | Tengen",
    description: "All the updates, features, and fixes we've pushed to Tengen.",
}

export default function ChangelogPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-1 pt-12">
                <Changelog />
            </div>
            <Footer />
        </main>
    )
}
