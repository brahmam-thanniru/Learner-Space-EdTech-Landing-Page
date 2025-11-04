import { BarChart3, Users, LineChart, Target } from "lucide-react";

export function CompleteFeatureSet() {
  const sets = [
    {
      title: "Platform & Branding",
      color: "from-blue-500 to-blue-600",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      features: [
        "Real-time Dashboard",
        "Performance Metrics",
        "Custom Reports",
        "Data Export",
        "AI Insights",
      ],
    },
    {
      title: "Course Management",
      color: "from-purple-500 to-purple-600",
      icon: <Users className="w-6 h-6 text-white" />,
      features: [
        "Course Categorization",
        "Rich Media Support",
        "Bulk Operations",
      ],
    },
    {
      title: "Analytics & Management",
      color: "from-orange-500 to-orange-600",
      icon: <LineChart className="w-6 h-6 text-white" />,
      features: [
        "Engagement Tracking",
        "AI-Powered Insights",
        "Export Capabilities",
        "Access Control",
        "Performance Reports",
        "Compliance Ready",
      ],
    },
    {
      title: "Student & Access",
      color: "from-green-500 to-green-600",
      icon: <Target className="w-6 h-6 text-white" />,
      features: [
        "Quick Search",
        "Advanced Filters",
        "Content Library",
        "Masterclasses",
        "Website Redirection",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white text-center">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Complete Feature Set for EdTech Companies
        </h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Everything you need to run, grow, and optimize your learning platform
          , from course uploads to engagement analytics.
          <span className="block mt-1 text-orange-500 font-medium">
            Streamline operations and let learners find you effortlessly.
          </span>
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {sets.map((set, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-8 text-left border border-slate-100 hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${set.color} flex items-center justify-center shadow-md`}
              >
                {set.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {set.title}
              </h3>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {set.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-orange-50 hover:text-slate-900 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
