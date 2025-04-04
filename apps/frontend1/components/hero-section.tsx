"use client"

import { SplineScene } from "@/components/ui/spline-scene"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="flex-1 relative z-10 flex flex-col justify-center mb-10 md:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-6">
            <span>Play Instantly Online</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Play Amazing Games Instantly
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-lg">
            Dive into a world of exciting online games. No downloads, no waiting - just instant fun with friends or
            solo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-lg">Play Now</Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
            >
              Browse Games <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

