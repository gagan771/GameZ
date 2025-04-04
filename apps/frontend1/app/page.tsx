import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { LampDemo } from "@/components/lamp-demo"
import { GameLevelsSection } from "@/components/GameLevelsSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { JoinWaitlistSection } from "@/components/JoinWaitlistSection"
import { navItems } from "@/data/gameData"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatingNavbar navItems={navItems} />

      {/* Hero Section */}
      <HeroSection />

      {/* Lamp Demo Section */}
      <section className="w-full">
        <LampDemo />
      </section>

      {/* Game Levels Section */}
      <GameLevelsSection />

      {/* Game Features Section */}
      <FeaturesSection />

      {/* Join Waitlist Section */}
      <JoinWaitlistSection />

      <Footer />
    </div>
  )
}

