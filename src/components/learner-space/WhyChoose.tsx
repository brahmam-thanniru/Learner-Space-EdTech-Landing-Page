import { Brain, LineChart, Target, Zap } from "lucide-react";

export function WhyChoose() {
  const items = [
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      stat: "+35%",
      title: "AI-Powered Discovery",
      desc: "Smart algorithms help learners find your courses effortlessly in this crowded space.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-orange-500" />,
      stat: "+35%",
      title: "Engagement Analytics",
      desc: "Track what works best and refine your offerings to stay ahead of the competition.",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      stat: "98% accuracy",
      title: "Targeted Filtering",
      desc: "Enable precise discovery ,  let learners zero in on your most relevant courses.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      stat: "5x faster",
      title: "Seamless Integration",
      desc: "Connect your existing platform effortlessly ,  and get discovered by more learners.",
    },
  ];

  return (
    <section className="py-24 bg-white text-center">
      {/* Section Header */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Why Choose Learner Space?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Let learners find you in this crowded digital space. Empower your
          EdTech platform with measurable results and smarter discovery.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-2xl p-8 text-left shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 mb-5">
              {i.icon}
            </div>

            {/* Stat */}
            <div className="text-2xl font-semibold text-orange-500 mb-1">
              {i.stat}
            </div>

            {/* Title */}
            <div className="text-lg font-semibold text-slate-900 mb-2">
              {i.title}
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
