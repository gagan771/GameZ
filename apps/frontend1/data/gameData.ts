import React, { ReactNode } from 'react';

export const navItems = [
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
];

export const gameLevels = [
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
];

export const gameFeatures = [
  {
    title: "Dynamic Aging System",
    description: "Experience realistic aging with visual changes to your character and evolving abilities",
    icon: React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-cyan-400">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>`
      }
    })
  },
  {
    title: "Life Choices Matter",
    description: "Every decision affects your character's development, relationships, and future opportunities",
    icon: React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-cyan-400">
          <path d="M2 12h5"></path>
          <path d="M7 5v14"></path>
          <path d="M11 12h5"></path>
          <path d="M16 5v14"></path>
          <path d="M20 5v14"></path>
        </svg>`
      }
    })
  },
  {
    title: "Realistic Relationships",
    description: "Form deep connections with AI characters that remember your interactions and evolve over time",
    icon: React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-cyan-400">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>`
      }
    })
  },
  {
    title: "Career Progression",
    description: "Choose from dozens of career paths with unique challenges, skills, and advancement opportunities",
    icon: React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-cyan-400">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`
      }
    })
  },
  {
    title: "Health System",
    description: "Manage physical and mental health through diet, exercise, social connections, and life balance",
    icon: React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-cyan-400">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>`
      }
    })
  }
];
