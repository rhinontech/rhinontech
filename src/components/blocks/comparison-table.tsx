"use client";

import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className=" text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <button className="px-6 py-2 text-sm font-medium text-white border border-purple-500 rounded-full mb-4 hover:bg-purple-600/20 transition">
          Comparison
        </button>
        <h2 className="text-4xl font-bold mb-4">
          Why Teams Choose <span className="text-purple-400">Draftbit</span>{" "}
          Over Other Platforms
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Teams choose Draftbit for fast, customizable no-code mobile app
          development.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-6xl">
          <div className="grid grid-cols-4 text-left border border-gray-800 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="bg-black p-6 font-semibold text-lg"></div>
            <div className="bg-purple-900/30 text-purple-300 p-6 font-semibold text-lg text-center">
              Draftbit
            </div>
            <div className="bg-gray-900 text-gray-300 p-6 font-semibold text-lg text-center">
              No-Code Tools
            </div>
            <div className="bg-gray-900 text-gray-300 p-6 font-semibold text-lg text-center">
              Traditional Devs
            </div>

            {/* Data Rows */}
            {[
              {
                label: "Visual Development",
                draftbit: true,
                nocode: true,
                devs: false,
              },
              {
                label: "AI Assistants",
                draftbit: true,
                nocode: true,
                devs: false,
              },
              {
                label: "Expert Human Support",
                draftbit: true,
                nocode: false,
                devs: true,
              },
              {
                label: "Exportable Source Code",
                draftbit: true,
                nocode: false,
                devs: true,
              },
              {
                label: "Launch Guarantee",
                draftbit: true,
                nocode: false,
                devs: false,
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="col-span-4 grid grid-cols-4 border-t border-gray-800"
              >
                {/* Feature Label */}
                <div className="p-5 text-gray-300">{row.label}</div>

                {/* Draftbit Column */}
                <div className="p-5 flex justify-center items-center bg-purple-900/20">
                  {row.draftbit ? (
                    <Check className="text-purple-400 w-5 h-5" />
                  ) : (
                    <X className="text-gray-600 w-5 h-5" />
                  )}
                </div>

                {/* No-Code Tools Column */}
                <div className="p-5 flex justify-center items-center bg-gray-900/40">
                  {row.nocode ? (
                    <Check className="text-white/70 w-5 h-5" />
                  ) : (
                    <X className="text-gray-700 w-5 h-5" />
                  )}
                </div>

                {/* Traditional Devs Column */}
                <div className="p-5 flex justify-center items-center bg-gray-900/40">
                  {row.devs ? (
                    <Check className="text-white/70 w-5 h-5" />
                  ) : (
                    <X className="text-gray-700 w-5 h-5" />
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
