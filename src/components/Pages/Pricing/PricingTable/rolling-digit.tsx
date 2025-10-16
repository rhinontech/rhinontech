"use client"

interface RollingDigitProps {
  digit: string
  isAnimating: boolean
  delay: number
}

export function RollingDigit({ digit, isAnimating, delay }: RollingDigitProps) {
  return (
    <div
      className="relative inline-block w-6 h-10 overflow-hidden"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{
          transform: isAnimating ? "rotateX(90deg)" : "rotateX(0deg)",
          transformStyle: "preserve-3d",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div className="h-10 flex items-center justify-center font-bold text-3xl">{digit}</div>
      </div>
    </div>
  )
}
