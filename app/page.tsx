import { cn } from '@/lib/utils'
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import BlurIn from "@/components/magicui/blur-in";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-theme(spacing.16))]">
      <BlurIn
        word="Welcome to CareAI"
        className="text-4xl font-bold text-black mb-8"
      />

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row mb-8">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
          gradientColor="#D9D9D955"
        >
          Fujifilm XT-30
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor="#D9D9D955"
        >
          Leica M8
        </MagicCard>
      </div>    
    </div>
  )
}