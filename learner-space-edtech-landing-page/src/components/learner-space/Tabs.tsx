import { useState } from "react";
export function Tabs() {
  const [active, setActive] = useState("Analytics");
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Everything You Need, All in One Place
      </h2>
      <p className="text-slate-600 mb-8">
        Comprehensive features across all modules
      </p>
      <div className="flex justify-center gap-4 mb-10">
        {["Analytics", "Companies", "Settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-full border transition ${
              active === tab
                ? "bg-orange-500 text-white"
                : "bg-white border-orange-200 text-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-8 text-left">
        {active === "Analytics" && (
          <>
            <h4 className="text-xl font-semibold mb-2">Data & Insights</h4>
            <ul className="list-disc list-inside text-slate-600">
              <li>Interactive metrics with trends</li>
              <li>Real-time analytics</li>
              <li>Expandable CSV exports</li>
            </ul>
          </>
        )}
        {active === "Companies" && (
          <>
            <h4 className="text-xl font-semibold mb-2">Advanced Features</h4>
            <ul className="list-disc list-inside text-slate-600">
              <li>Custom data templates</li>
              <li>Organization management</li>
            </ul>
          </>
        )}
        {active === "Settings" && (
          <>
            <h4 className="text-xl font-semibold mb-2">Configuration Tools</h4>
            <ul className="list-disc list-inside text-slate-600">
              <li>Customizable Preferences</li>
              <li>Secure Data Access</li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
