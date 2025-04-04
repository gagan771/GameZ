import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface GameLevelCardProps {
  title: string
  description: string
  image: string
  difficulty: "easy" | "medium" | "hard" | "expert"
  unlocked: boolean
  agePhase: string
}

export function GameLevelCard({ title, description, image, difficulty, unlocked, agePhase }: GameLevelCardProps) {
  return (
    <Card
      className={`overflow-hidden border ${unlocked ? "border-cyan-500/30" : "border-white/10"} bg-black/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-cyan-500/10`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover ${!unlocked && "grayscale opacity-50"}`}
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={
              difficulty === "easy"
                ? "default"
                : difficulty === "medium"
                  ? "secondary"
                  : difficulty === "hard"
                    ? "destructive"
                    : "outline"
            }
            className="capitalize"
          >
            {difficulty}
          </Badge>
        </div>
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="rounded-full bg-black/80 p-3">
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
                className="text-white"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">{title}</CardTitle>
          <span className="text-xs text-cyan-400">{agePhase}</span>
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {unlocked ? (
            <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
              Unlocked
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-gray-500/10 text-gray-400 border-gray-500/30">
              Locked
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

