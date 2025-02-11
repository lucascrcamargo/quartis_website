import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div className={cn("relative", sizes[size], className)}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UtPlgfAPs7Bi1Fi87lefNzzCX9J3DJ.png"
        alt="Quartis Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

