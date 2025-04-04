import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { GameLevelCard } from "@/components/game-level-card"
import { HeroSection } from "@/components/hero-section"
import { LampDemo } from "@/components/lamp-demo"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const navItems = [
  {
    name: "Home",
    link: "/",
    isActive: true,
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Gameplay",
    link: "/gameplay",
  },
  {
    name: "Community",
    link: "/community",
  },
]

const gameLevels = [
  {
    title: "Childhood",
    description: "Navigate the early years of life, learning basic skills and forming your character",
    image: "/placeholder.svg?height=400&width=600",
    difficulty: "easy" as const,
    unlocked: true,
    agePhase: "Ages 0-12",
  },
  {
    title: "Adolescence",
    description: "Face the challenges of teenage years, make crucial decisions that shape your future",
    image: "/placeholder.svg?height=400&width=600",
    difficulty: "medium" as const,
    unlocked: true,
    agePhase: "Ages 13-19",
  },
  {
    title: "Young Adult",
    description: "Build your career, form relationships, and establish your place in the world",
    image: "/placeholder.svg?height=400&width=600",
    difficulty: "medium" as const,
    unlocked: false,
    agePhase: "Ages 20-35",
  },
  {
    title: "Middle Age",
    description: "Balance life responsibilities, face mid-life challenges, and secure your legacy",
    image: "/placeholder.svg?height=400&width=600",
    difficulty: "hard" as const,
    unlocked: false,
    agePhase: "Ages 36-55",
  },
  {
    title: "Senior Years",
    description: "Reflect on your life choices, enjoy retirement, and pass wisdom to new generations",
    image: "/placeholder.svg?height=400&width=600",
    difficulty: "expert" as const,
    unlocked: false,
    agePhase: "Ages 56+",
  },
]

const gameFeatures = [
  {
    title: "Dynamic Aging System",
    description: "Experience realistic aging with visual changes to your character and evolving abilities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    title: "Life Choices Matter",
    description: "Every decision affects your character's development, relationships, and future opportunities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <path d="M2 12h5"></path>
        <path d="M7 5v14"></path>
        <path d="M11 12h5"></path>
        <path d="M16 5v14"></path>
        <path d="M20 5v14"></path>
      </svg>
    ),
  },
  {
    title: "Realistic Relationships",
    description: "Form deep connections with AI characters that remember your interactions and evolve over time",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Career Progression",
    description: "Choose from dozens of career paths with unique challenges, skills, and advancement opportunities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Health System",
    description: "Manage physical and mental health through diet, exercise, social connections, and life balance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Legacy Building",
    description: "Create a lasting impact on the game world that carries over to future generations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    ),
  },
]

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
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Life Stages</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the complete journey of human life through five distinct stages, each with unique challenges
              and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameLevels.map((level) => (
              <GameLevelCard key={level.title} {...level} />
            ))}
          </div>
        </div>
      </section>

      {/* Game Details Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Game Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Life Simulator offers a deeply immersive experience with realistic systems that simulate the complexity of
              human life.
            </p>
          </div>

          <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
              <TabsTrigger value="system">System Requirements</TabsTrigger>
            </TabsList>

            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gameplay">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Character Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Customize your character's appearance, traits, and starting abilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Develop skills through education, practice, and life experiences</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Balance physical, mental, and emotional attributes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">World Interaction</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Explore diverse environments from cities to rural areas</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Interact with hundreds of unique NPCs with their own lives and stories</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Dynamic events and challenges based on your character's age and circumstances</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="system">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Minimum Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">OS:</span>
                      <span>Windows 10 64-bit / macOS 10.15+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">CPU:</span>
                      <span>Intel Core i5-6600 / AMD Ryzen 3 1300X</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">RAM:</span>
                      <span>8 GB</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">GPU:</span>
                      <span>NVIDIA GTX 1050 / AMD RX 560</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">Storage:</span>
                      <span>50 GB available space</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Recommended Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">OS:</span>
                      <span>Windows 11 64-bit / macOS 12+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">CPU:</span>
                      <span>Intel Core i7-9700K / AMD Ryzen 5 3600X</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">RAM:</span>
                      <span>16 GB</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">GPU:</span>
                      <span>NVIDIA RTX 2060 / AMD RX 5700</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-cyan-400 mr-2">Storage:</span>
                      <span>50 GB SSD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Join the Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Be among the first to experience Life Simulator. Sign up for early access and receive exclusive in-game
            bonuses.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Join Early Access
          </Button>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  )
}

