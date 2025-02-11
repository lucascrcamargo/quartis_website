import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  showText?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

export function Logo({ showText = true, className, size = "md" }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={cn("relative", sizes[size])}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2-Jvj60iWjsSAbxGH0g2vtfnWSbw6AmQ.png"
          alt="Quartis Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="text-2xl font-bold bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
          Quartis
        </span>
      )}
    </div>
  )
}

