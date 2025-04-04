import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  status: "coming-soon" | "live" | "beta"
}

export function ProjectCard({ title, description, image, tags, link, status }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge
            variant={status === "live" ? "default" : status === "beta" ? "secondary" : "outline"}
            className="capitalize"
          >
            {status}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={link}>
            {status === "coming-soon" ? "Join Waitlist" : status === "beta" ? "Try Beta" : "Play Now"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

