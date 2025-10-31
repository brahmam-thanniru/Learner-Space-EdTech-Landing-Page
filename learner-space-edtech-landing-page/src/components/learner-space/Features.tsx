import { BarChart3, Search, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "AI-Powered Course Discovery",
      desc: "Get your courses discovered by the right learners at the right time. Our AI-driven search and recommendation engine connects your offerings to students who are most likely to enroll.",
      points: [
        "Smart search optimization for visibility",
        "Personalized recommendations to users",
        "Dynamic filters by skill, price, and duration",
        "Lead tracking with conversion insights",
      ],
      image: "/assets/ai-matching.jpg",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Performance & Lead Analytics",
      desc: "Monitor every metric that drives your growth. From impressions to lead conversion rates, get a unified view of how your courses are performing across the platform.",
      points: [
        "Real-time lead and engagement analytics",
        "Traffic source and conversion tracking",
        "ROI dashboards for marketing performance",
        "Exportable data reports for deeper insights",
      ],
      image: "/assets/analytics-preview.jpg",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Smart Growth Insights",
      desc: "Leverage predictive insights to improve course performance and learner engagement. Our system highlights trends and strategies that boost your visibility and enrollment success.",
      points: [
        "AI-based trend forecasting",
        "Competitive benchmarking within your niche",
        "Automated improvement suggestions",
        "Real-time feedback from learner behavior",
      ],
      image: "/assets/insights.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Tools That Empower EdTech Growth
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our platform helps education companies scale faster , with AI-driven
          discovery, detailed analytics, and actionable insights for continuous
          growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 px-6">
        {features.map((feature, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
            {/* 🖥️ Monitor Frame Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
              className={`relative flex flex-col items-center ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              {/* Monitor Frame */}
              <div className="bg-slate-900 rounded-t-xl rounded-b-md shadow-2xl overflow-hidden relative w-full border border-slate-800">
                {/* Screen */}
                <div className="bg-black p-2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-md w-full h-[320px] object-cover"
                  />
                </div>
              </div>

              {/* Monitor Stand */}
              <div className="w-12 h-2 bg-slate-800 mt-2 rounded-md"></div>
              <div className="w-24 h-1 bg-slate-700 rounded-full mt-1"></div>
            </motion.div>

            {/* Text Section */}
            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500 shadow-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-5">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mt-1.5"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
