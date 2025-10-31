import { useState } from "react";
import { BarChart3, BookOpen, Plug } from "lucide-react";

export function Tabs() {
  const [active, setActive] = useState("Insights");

  const tabs = [
    { name: "Insights", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Course Management", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Integration & Support", icon: <Plug className="w-4 h-4" /> },
  ];

  return (
    <section className="py-24 text-center bg-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-slate-900 mb-3">
        Everything You Need to Grow Your EdTech Business
      </h2>
      <p className="text-slate-600 text-lg mb-10">
        Manage your courses, track performance, and connect with learners , all
        in one place.
      </p>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto flex justify-center rounded-2xl overflow-hidden bg-slate-100">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-medium transition-all
              ${
                active === tab.name
                  ? "bg-orange-500 text-white"
                  : "text-slate-800 hover:text-orange-500"
              }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl border shadow-sm text-left p-10">
        {active === "Insights" && (
          <div className="grid md:grid-cols-2 divide-x divide-slate-200 gap-10">
            <div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Lead & Performance Analytics
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "Track leads generated from your listed courses",
                  "Monitor click-throughs and enrollment conversions",
                  "Get AI-based course performance insights",
                  "Compare course reach and engagement across time",
                  "Export data for marketing optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-10">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Business Growth Insights
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "See which courses attract the most learners",
                  "AI-powered suggestions for better visibility",
                  "Identify top-performing categories",
                  "Visualize engagement and lead sources",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "Course Management" && (
          <div className="grid md:grid-cols-2 divide-x divide-slate-200 gap-10">
            <div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Manage Your Course Listings
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "Add, update, and manage course listings",
                  "Highlight key features and pricing",
                  "Enable filters for better discoverability",
                  "Feature courses with high ratings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-10">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Optimize for Discovery
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "AI-based recommendations to boost visibility",
                  "Category and keyword tagging system",
                  "Real-time course status updates",
                  "Automatic lead notifications for enrollments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "Integration & Support" && (
          <div className="grid md:grid-cols-2 divide-x divide-slate-200 gap-10">
            <div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Seamless LMS Integration
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "Connect your existing LMS easily",
                  "Auto-sync course details and enrollments",
                  "Manage redirects for learner registrations",
                  "Secure lead API for real-time updates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-10">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Support & Customization
              </h4>
              <ul className="space-y-3 text-slate-800">
                {[
                  "Dedicated onboarding assistance",
                  "Custom branding for course pages",
                  "API documentation and developer tools",
                  "Priority technical support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
