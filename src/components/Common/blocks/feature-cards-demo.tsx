'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { Users, Megaphone, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Customer Success Team",
    icon: Users,
    description: "Deliver instant, personalized support without context switching",
  },
  {
    title: "Marketing Team",
    icon: Megaphone, 
    description: "Engage every visitor at the perfect moment",
  },
  {
    title: "Growth & RevOps Team",
    icon: TrendingUp,
    description: "Turn customer conversations into qualified leads and revenue.",
  },
];


export default function FeatureCardsDemo() {
  return (
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-wide text-balance bg-gradient-text-radial bg-clip-text text-transparent">
             Built for teams driving customer growth
          </h2>
          <p className="text-muted-foreground mt-6 text-base md:text-lg tracking-wide">
            Rhinon brings teams together on one platform — so every conversation turns into a conversion
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Blue light at top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

              {/* Feature Card content */}
              <FeatureCard feature={feature} />
            </div>
          ))}
        </AnimatedContainer>
      </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
