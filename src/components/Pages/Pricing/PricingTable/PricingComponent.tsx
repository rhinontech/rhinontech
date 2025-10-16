"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Shield, Users, Rocket } from "lucide-react"
import {
  type FeatureItem,
  PricingTable,
  PricingTableBody,
  PricingTableHeader,
  PricingTableHead,
  PricingTableRow,
  PricingTableCell,
  PricingTablePlan,
} from "./PricingTable"

import { Button } from "@/components/ui/button"

export default function PricingComponent() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20">
      <div
        className={cn(
          "absolute inset-0 z-[-10] size-full max-h-102 opacity-50",
          "[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]",
        )}
        style={{
          backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className={cn("text-3xl leading-tight font-bold text-balance sm:text-5xl")}>
          {"Choose a  "}
          <i className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-400 bg-clip-text font-serif font-extrabold text-transparent ">
            {"plan that grows "}
          </i>
          <br />
          {"with  "}
          <i className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-400 bg-clip-text font-serif font-extrabold text-transparent">
            {"your business"}
          </i>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-pretty">
          Deploy Consistent Designs Faster With Figr's AI solutions.
        </p>

        <div className="mt-8 flex items-center gap-4 rounded-full border bg-muted p-1">
          <button
            onClick={() => setIsYearly(true)}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all",
              isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Yearly
          </button>
          <button
            onClick={() => setIsYearly(false)}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all",
              !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Monthly
          </button>
        </div>
      </div>
      <Default isYearly={isYearly} />
    </div>
  )
}

function Default({ isYearly }: { isYearly: boolean }) {
  return (
    <PricingTable className="mx-auto my-5 max-w-5xl">
      <PricingTableHeader>
        <PricingTableRow>
          <th />

          {/* Starter Plan */}
          <th className="p-1">
            <PricingTablePlan
              name="Starter"
              yearlyprice="₹14k/mo"
              monthlyprice="₹15k/mo"
              icon={Shield}
              isYearly={isYearly}
            >
              <Button variant="outline" className="w-full rounded-lg bg-transparent" size="lg">
                Get Started
              </Button>
            </PricingTablePlan>
          </th>

          {/* Growth Plan */}
          <th className="p-1">
            <PricingTablePlan
              name="Growth"
              yearlyprice="₹24k/mo"
              monthlyprice="₹25k/mo"
              icon={Users}
              isYearly={isYearly}
              className="after:pointer-events-none after:absolute after:-inset-0.5 after:rounded-[inherit] after:bg-gradient-to-b after:from-blue-500/15 after:to-transparent after:blur-[2px]"
            >
              <Button
                className="w-full rounded-lg border-blue-700/60 bg-blue-600/80 text-white hover:bg-blue-600"
                size="lg"
              >
                Get Started
              </Button>
            </PricingTablePlan>
          </th>

          {/* Scale Plan */}
          <th className="p-1">
            <PricingTablePlan
              name="Scale"
              yearlyprice="₹34k/mo"
              monthlyprice="₹35k/mo"
              icon={Rocket}
              isYearly={isYearly}
            >
              <Button variant="outline" className="w-full rounded-lg bg-transparent" size="lg">
                Get Started
              </Button>
            </PricingTablePlan>
          </th>
        </PricingTableRow>
      </PricingTableHeader>

      <PricingTableBody>
        {FEATURES.map((feature, index) => (
          <PricingTableRow key={index}>
            <PricingTableHead>{feature.label}</PricingTableHead>
            {feature.values.map((value, index) => (
              <PricingTableCell key={index}>{value}</PricingTableCell>
            ))}
          </PricingTableRow>
        ))}
      </PricingTableBody>
    </PricingTable>
  )
}

export const FEATURES: FeatureItem[] = [
  {
    label: "AI Chatbot",
    values: ["500k Tokens", "1 Million Tokens", "2 Million Tokens"],
  },
  {
    label: "Users",
    values: ["5", "15", "Unlimited"],
  },
  {
    label: "Training Data Sources",
    values: ["Up to 10", "Up to 50", "Unlimited"],
  },
  {
    label: "Live Traffic Chat",
    values: [true, true, true],
  },
  {
    label: "Knowledge Hub",
    values: ["10 articles", "25 articles", "Unlimited articles"],
  },
  {
    label: "Individual Knowledge Base",
    values: [false, true, true],
  },
  {
    label: "SEO Analytics Report",
    values: ["1 / week", "2 / week", "4 / week"],
  },
  {
    label: "Direct Calling",
    values: [true, true, true],
  },
  {
    label: "Voice Bot",
    values: ["Add on", "Add on", "Add on"],
  },
  {
    label: "Campaigns",
    values: ["3", "5", "10"],
  },
  {
    label: "CRM",
    values: ["Coming Soon", "Coming Soon", "Coming Soon"],
  },
  {
    label: "Workflow Automation",
    values: ["Coming Soon", "Coming Soon", "Coming Soon"],
  },
]
