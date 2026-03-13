import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Encryption from "@/components/Encryption"
import SelfHost from "@/components/SelfHost"
import OpenSource from "@/components/OpenSource"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <TrustBar />
            <Features />
            <HowItWorks />
            <Encryption />
            <SelfHost />
            <OpenSource />
            <Footer />
        </main>
    )
}
