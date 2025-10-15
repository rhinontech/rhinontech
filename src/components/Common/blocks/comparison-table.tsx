"use client";

import { Check, X, Sparkles, ShieldAlert, AlertTriangle } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    {
      label: "Core Purpose",
      rhinon: "Unified AI Customer Engagement & Revenue Layer",
      generic: "Customer Support + Basic Lead Chat",
      multiple: "Disconnected tools for each function",
    },
    {
      label: "Setup & Time-to-Value",
      rhinon: "One script install (live in <10 mins)",
      generic: "Requires long onboarding & setup",
      multiple: "Complex integration setup between multiple tools",
    },
    {
      label: "Lead Capture & Qualification",
      rhinon:
        "Built-in AI identifies, qualifies & routes leads automatically",
      generic: "Basic lead forms or manual tagging",
      multiple: "Lead data scattered across tools. Hard to track",
    },
    {
      label: "AI Intelligence",
      rhinon: "RAG-based answers from your docs + CRM context",
      generic: "Generic chatbot AI trained on FAQs",
      multiple: "Each tool has separate AI with inconsistent responses",
    },
    {
      label: "Data Sync & Workflow",
      rhinon: "All data unified - CRM, chat, and campaigns in one system",
      generic: "Partial integrations, often expensive add-ons",
      multiple:
        "Prone to sync failures, data silos & manual updates",
    },
    {
      label: "Scalability & Maintenance",
      rhinon: "Scales automatically, minimal dev maintenance",
      generic: "Grows costly with seats & add-ons",
      multiple: "High maintenance cost, technical overhead",
    },
    {
      label: "Customization & Control",
      rhinon: "Developer-friendly (npm + API) + no-code setup",
      generic: "Limited control, mostly UI-based customizations",
      multiple:
        "Requires engineering for every integration or tweak",
    },
    {
      label: "Reporting & Insights",
      rhinon: "Unified dashboard: leads, support, conversions",
      generic: "Separate analytics per module",
      multiple:
        "Fragmented reports, no clear ROI visibility",
    },
    {
      label: "Pricing & ROI",
      rhinon: "Pay for outcomes, not seats, affordable for lean teams",
      generic: "Tiered, per-seat pricing, expensive as you grow",
      multiple: "Multiple subscriptions, highest cost overall",
    },
    {
      label: "Who It’s Built For",
      rhinon:
        "CX, Growth, and Marketing teams at lean startups & SMBs",
      generic: "Primarily CX teams at mid-large companies",
      multiple: "Founders juggling multiple tools for each function",
    },
    {
      label: "Speed of Iteration",
      rhinon: "Test → Learn → Deploy in minutes",
      generic: "Slower, dependent on vendor support",
      multiple: "Slow, needs dev support across tools",
    },
    {
      label: "Key Value",
      rhinon:
        "Converts more, costs less, and gives full visibility across the funnel",
      generic: "Good for support, limited for growth & revenue",
      multiple:
        "Flexible but chaotic, lacks unified intelligence",
    },
    {
      label: "Overall Verdict",
      rhinon: (
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="text-pink-400 w-5 h-5" />
          <span>Unified, smart, and built for modern lean teams</span>
        </div>
      ),
      generic: (
        <div className="flex items-center justify-center gap-2">
          <ShieldAlert className="text-green-400 w-5 h-5" />
          <span>Reliable but rigid and expensive</span>
        </div>
      ),
      multiple: (
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="text-yellow-400 w-5 h-5" />
          <span>Flexible but inefficient and unscalable</span>
        </div>
      ),
    },
  ];

  return (
    <section className="text-white px-4 sm:px-6 md:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <button className="px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white border border-purple-500 rounded-full mb-4 hover:bg-purple-600/20 transition">
          Comparison
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Why Teams Choose <span className="text-purple-400">Rhinon</span>{" "}
          Over Other Platforms
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Compare how Rhinon stacks up against other customer engagement platforms.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-7xl">
          <div className="grid grid-cols-4 min-w-[700px] text-left border border-gray-800 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="bg-black p-4 sm:p-6 font-semibold text-base sm:text-lg"></div>
            <div className="bg-purple-900/30 text-purple-300 p-4 sm:p-6 font-semibold text-center text-base sm:text-lg">
              Rhinon
            </div>
            <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 font-semibold text-center text-base sm:text-lg">
              Generic Platforms
            </div>
            <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 font-semibold text-center text-base sm:text-lg">
              Multiple Tool Stack
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="col-span-4 grid grid-cols-4 border-t border-gray-800"
              >
                {/* Feature Label */}
                <div className="p-4 sm:p-5 text-gray-300 text-sm sm:text-xl font-bold">
                  {row.label}
                </div>

                {/* Rhinon Column */}
                <div className="p-4 sm:p-5 flex justify-center items-center text-center bg-purple-900/20 text-gray-100 text-sm sm:text-base">
                  {typeof row.rhinon === "string" ? (
                    <span>{row.rhinon}</span>
                  ) : (
                    row.rhinon
                  )}
                </div>

                {/* Generic Column */}
                <div className="p-4 sm:p-5 flex justify-center items-center text-center bg-gray-900/40 text-gray-300 text-sm sm:text-base">
                  {typeof row.generic === "string" ? (
                    <span>{row.generic}</span>
                  ) : (
                    row.generic
                  )}
                </div>

                {/* Multiple Tools Column */}
                <div className="p-4 sm:p-5 flex justify-center items-center text-center bg-gray-900/40 text-gray-300 text-sm sm:text-base">
                  {typeof row.multiple === "string" ? (
                    <span>{row.multiple}</span>
                  ) : (
                    row.multiple
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
